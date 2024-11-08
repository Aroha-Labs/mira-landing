import React from "react";
import article_bg from "@/assets/images/bg/article_bg.webp";
import { writingData } from "@/dataFiles/articles";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import remarkGfm from "remark-gfm";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";
const gtSuperText = localFont({
  src: "../../fonts/GT-Super-Text-Book.woff2",
  variable: "--font-gt-super",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

type PageProps = {
  params: Promise<{ slug: string }>;
};

const MainWriting = async (props: PageProps) => {
  const { slug } = await props.params;
  const article = writingData.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  try {
    const markdownContent = fs.readFileSync(
      path.join(process.cwd(), "public", "data", "markdown", `${slug}.md`),
      "utf-8"
    );

    return (
      <div className="min-h-screen w-screen bg-black relative flex flex-col">
        <div
          className="w-screen h-screen bg-no-repeat bg-cover fixed top-0 left-0 bg-black"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), radial-gradient(circle at top right, #15473B 0%, transparent 100%), url(${article_bg.src})`,
          }}
        ></div>
        <div className="relative flex-1 pt-[111px] px-[48px] max-sm:px-[0px]">
          <div className="relative w-full">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #105C43 100%)",
                padding: "1px",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
              }}
            ></div>
            <div className="relative w-full bg-black/30 backdrop-blur-sm py-[64px] flex flex-col items-center justify-start">
              <div className="h-fit flex flex-col items-start justify-start lg:w-2/3 w-full md:w-3/4 max-w-[640px] max-sm:px-[32px] max-md:max-w-[480px]">
                <span
                  className={`${jetBrainsMono.className} w-fit px-[7px] py-[4px] bg-[#34E39B] rounded-full text-[#070B09] text-[11px] font-bold leading-[104%]`}
                >
                  {article.tag}
                </span>
                <p
                  className={`${gtSuperText.className} text-[32px] leading-[120%] text-white mt-[37px]`}
                >
                  {article.title}
                </p>
                {article.authors.length > 0 && (
                  <div className="w-full flex flex-col md:flex-row justify-between items-start max-md:gap-y-[16px] md:items-center mt-[32px]">
                    <p
                      className={`text-[14px] leading-[150%] text-[#999999] flex items-center gap-x-[15px]`}
                    >
                      {article.authors.map((author, index) => (
                        <React.Fragment key={author}>
                          {index > 0 && (
                            <svg
                              width="4"
                              height="3"
                              viewBox="0 0 4 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="1.83594"
                                cy="1.5"
                                r="1.5"
                                fill="#5D5D5D"
                              />
                            </svg>
                          )}
                          {author}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                )}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="text-white w-full mt-[64px]"
                  components={{
                    p: ({ ...props }) => (
                      <p
                        className="text-[16px] leading-[150%] text-[#8C8C8C] mt-[16px]"
                        {...props}
                      />
                    ),
                    h2: ({ ...props }) => (
                      <p
                        className="text-[16px] font-bold leading-[120%] text-white mt-[32px]"
                        {...props}
                      />
                    ),
                    h1: ({ ...props }) => (
                      <p
                        className="text-[24px] font-bold leading-[120%] text-white mt-[48px]"
                        {...props}
                      />
                    ),
                    h3: ({ ...props }) => (
                      <p
                        className="text-[14px] font-bold leading-[120%] text-white mt-[24px]"
                        {...props}
                      />
                    ),
                    ul: ({ ...props }) => (
                      <ul
                        className="list-disc pl-[24px] mt-[16px]"
                        {...props}
                      />
                    ),
                    ol: ({ ...props }) => (
                      <ol
                        className="list-decimal pl-[24px] mt-[16px]"
                        {...props}
                      />
                    ),
                    li: ({ ...props }) => (
                      <li
                        className="text-[16px] leading-[150%] text-[#8C8C8C] mt-[8px]"
                        {...props}
                      />
                    ),
                    blockquote: ({ ...props }) => (
                      <blockquote
                        className="border-l-4 border-[#105C43] pl-[16px] my-[24px] italic"
                        {...props}
                      />
                    ),
                    code: ({ ...props }) => (
                      <code
                        className="bg-[#1A1A1A] rounded px-[8px] py-[4px] text-[14px] font-mono"
                        {...props}
                      />
                    ),
                    pre: ({ ...props }) => (
                      <pre
                        className="bg-[#1A1A1A] rounded p-[16px] my-[24px] overflow-x-auto"
                        {...props}
                      />
                    ),
                    a: ({ ...props }) => (
                      <a className="text-[#34E39B]/50 underline" {...props} />
                    ),
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full py-[35px] mt-[35px]">
          <Footer />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading markdown file:", error);
    notFound();
  }
};

export async function generateStaticParams() {
  return writingData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  const article = writingData.find((item) => item.slug === slug);

  if (!article) {
    return defaultMetadata;
  }

  let ogImagePath = `/og/${slug}.png`;
  if (!fs.existsSync(path.join(process.cwd(), "public", "og", `${slug}.png`))) {
    ogImagePath = "/og-default.png";
  }

  return {
    ...defaultMetadata,
    title: `${article.title} | Mira`,
    description: article.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: article.title,
      description: article.description,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: article.title,
      description: article.description,
      images: [ogImagePath],
    },
  };
}

export default MainWriting;

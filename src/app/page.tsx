import IntroBanner from "@/components/composites/IntroBanner";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail, Slash } from "lucide-react";
import CopyButton from "@/components/composites/CopyButton";
import { Fragment } from "react";

const LINKEDIN_URL = "https://linkedin.com/in/doduronbi";
const GITHUB_URL = "https://github.com/oracleot";
const RESUME_URL = "https://docs.google.com/document/d/11x_aKqKuolZj3bCXA-_XicOJwGEV8d3d2NvB3nzw8XQ";

const portfolioSites: { title: string; url: string }[] = [
  { title: "LinkedIn", url: LINKEDIN_URL },
  { title: "Github", url: GITHUB_URL },
  { title: "Resume", url: RESUME_URL },
];

export default function Home() {
  return (
    <>
      <Header />
      <IntroBanner />
    </>
  );
}

function Header() {
  return (
    <header className="bg-[var(--light-gray)] pt-8 px-3">
      <div className="container hidden md:flex justify-between items-center mx-auto h-[3rem] flex-wrap">
        <section className="flex gap-3">
          <CopyButton text="doduronbi@gmail.com" />
          <Button asChild className="rounded-full" size="lg">
            <Link href="mailto:doduronbi@gmail.com" target="_blank">
              <Mail /> Email
            </Link>
          </Button>
        </section>
        <section className="flex items-center">
          {portfolioSites.map((item, index) => (
            <Fragment key={index}>
              <Button asChild variant="link">
                <Link href={item.url} target="_blank">
                  {item.title}
                </Link>
              </Button>
              {index !== portfolioSites.length - 1 && <Slash />}
            </Fragment>
          ))}
        </section>
      </div>
      <div className="container flex md:hidden justify-between items-center mx-auto h-[3rem] flex-wrap">
        <section className="flex gap-3">
          <Button asChild className="rounded-full" size="lg">
            <Link href="mailto:doduronbi@gmail.com" target="_blank">
              <Mail /> Email
            </Link>
          </Button>
        </section>
        <section className="flex gap-3">
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href={LINKEDIN_URL} target="_blank">
              <Linkedin />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href={GITHUB_URL} target="_blank">
              <Github />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href={RESUME_URL} target="_blank">
              <FileText />
            </Link>
          </Button>
        </section>
      </div>
    </header>
  );
}

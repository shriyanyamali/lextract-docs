export const metadata = {
  title: "Paper",
  description: "Lextract research paper and similar information.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Paper</h1>

      <p className="mb-6 text-lg">
        This paper is still a working draft and is not yet peer-reviewed.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        abstract
      </h2>
      <p className="mb-4 text-lg">
        Lextract is a Python pipeline that automatically extracts relevant
        market definitions from the European Commission’s merger and antitrust
        decision PDFs. Relevant market definitions establish the scope of
        competition legislation and identify the specific set of products in an
        area, which make them indispensable for economists, lawyers, and
        regulators when determining the effects of mergers and evaluating
        anticompetitive behavior. This pipeline has been designed for
        researchers and competition law experts who require a quick and accurate
        way to extract relevant market definitions from many cases at once. This
        level of accuracy is accomplished by using strict natural language
        processing and rule-based pattern recognition to identify market
        definitions while excluding all irrelevant information. By automating
        this process, Lextract enables merger and antitrust research at scale
        and contributes to more efficient competition policy analysis.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        full paper
      </h2>
      <p className="mb-4 text-lg">
        You can view the full paper{" "}
        <a
          href="https://github.com/shriyanyamali/Lextract/blob/main/paper.pdf"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
          target="_blank"
        >
          here
        </a>
        .
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        acknowledgements
      </h2>
      <p className="mb-4 text-lg">
        Lextract was built by Shriyan Yamali. I am grateful to Professor
        Thibault Schrepel of Stanford Law School for his invaluable advisement
        and guidance throughout the course of this project. This research
        received no funding from any government agency, university, company,
        or non-profit organization.
      </p>

      {/* <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        citation
      </h2>
      <p className="mb-4">
        TBA      
      </p> */}
    </section>
  );
}

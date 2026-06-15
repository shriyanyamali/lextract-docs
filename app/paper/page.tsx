export const metadata = {
  title: "Paper",
  description: "Lextract research paper.",
};

const link =
  "text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200";

const h2 =
  "underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4";

const p = "mb-4 text-lg leading-8";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Paper
      </h1>

      <p className={p}>
        This paper is still a working draft and is not yet peer-reviewed. You
        can view the original PDF{" "}
        <a href="/paper.pdf" target="_blank" className={link}>
          here
        </a>
        .
      </p>

      <h2 className={h2}>summary</h2>
      <p className={p}>
        Lextract is a Python pipeline that automatically extracts relevant
        market definitions from the European Commission&apos;s merger and
        antitrust decision PDFs. Relevant market definitions establish the scope
        of competition legislation and identify the specific set of products in
        an area, which make them indispensable for economists, lawyers, and
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

      <h2 className={h2}>statement of need</h2>
      <p className={p}>
        Competition authorities routinely delineate relevant markets as a first
        step in merger and antitrust assessments. The definition of the relevant
        market establishes the market position of firms operating within it,
        making its establishment necessary for regulators and courts to control
        mergers and evaluate potential abuses of dominant positions. For
        instance, in the 2025 case United States v. Google LLC, the outcome of
        the decision was impacted by how the relevant market was defined and
        whether Google and its services were found to hold a dominant position
        within that market.
      </p>

      <p className={p}>
        Furthermore, the Commission has published over 6,000 merger and
        antitrust decisions and continues to add 280 more annually, each
        structured and formatted idiosyncratically, with inconsistent placement
        of definitions and headings that vary in language. As a result,
        deterministic approaches such as regex are brittle and ineffective for
        extracting market definitions, while manual extraction is slow and
        irreproducible at scale.
      </p>

      <h2 className={h2}>state of the field</h2>
      <p className={p}>
        Despite its significance, only one commercial product addressing the
        need to quickly access relevant market definitions exists:
        LexisNexis&apos;s{" "}
        <a
          href="https://www.caselex.eu/services/service"
          target="_blank"
          className={link}
        >
          Caselex Market Definitions Module
        </a>
        . Caselex differs fundamentally from Lextract across many aspects
        pertinent to academic research. While Caselex offers broad multilingual
        coverage and human editorial review, it is proprietary, immutable, and
        inaccessible to many academics. Lextract addresses these limitations
        directly: it is open source, outputs structured JSON, is fully
        reproducible, and can be adapted to process new decisions or retargeted
        to different LLM backends.
      </p>

      <div className="my-6 overflow-x-auto border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-100 dark:bg-neutral-900">
            <tr>
              <th className="px-3 py-2">Feature</th>
              <th className="px-3 py-2">Lextract</th>
              <th className="px-3 py-2">Caselex</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cost", "Free", "Paid subscription"],
              ["Access", "Open source", "Proprietary"],
              ["Updateable by user", "Yes", "No"],
              ["Output format", "Structured JSON", "Web interface only"],
              ["Programmatic access", "Yes", "No"],
              ["Reproducible", "Yes", "No"],
              ["Human editorial review", "Yes, done by user", "Yes"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-neutral-200 dark:border-neutral-800">
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-2 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Table I: Comparison of Lextract and the Caselex Market Definitions
        Module.
      </p>

      <h2 className={h2}>software design</h2>
      <p className={p}>
        The general workflow for extracting market definitions is split into
        three sections and five steps. First, a script processes an Excel file
        downloaded from the{" "}
        <a
          href="https://competition-cases.ec.europa.eu/"
          target="_blank"
          className={link}
        >
          Commission&apos;s case search portal
        </a>{" "}
        and extracts decision document links with corresponding metadata.
        Another script then scrapes the decision text, converts it into a text
        corpus, sorts it by length, and excludes decisions without market
        definitions.
      </p>

      <p className={p}>
        The second section handles semantic extraction. Google Gemini identifies
        the section of each corpus containing market definitions, then isolates
        each individual market definition. Each definition is tagged with a
        topic and saved in structured JSON with the relevant metadata.
      </p>

      <p className={p}>
        The final section cleans each JSON file to remove extraneous characters
        and aggregates the results into a single file for research and analysis.
        This structure improves consistency, reduces variability, and supports
        the project&apos;s tested extraction workflow.
      </p>

      <figure className="my-8">
        <img
          src="/images/Lextract_Workflow_Diagram.png"
          alt="Workflow diagram of the Lextract pipeline"
          className="mx-auto w-full max-w-sm border border-neutral-200 bg-white p-2 dark:border-neutral-800"
        />
        <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Figure 1: Workflow Diagram of the Pipeline.
        </figcaption>
      </figure>

      <h2 className={h2}>evaluation</h2>
      <p className={p}>
        To assess the quality of Lextract&apos;s output, a pattern-based
        validity evaluation was conducted via a companion script included in the
        repository. Fifty market definitions were manually verified from source
        PDFs and compiled into a reference set, against whose structural and
        linguistic patterns every definition in the full output is scored.
      </p>

      <p className={p}>
        The JurisMercatus database, containing 4,105 definitions extracted from
        over 600 EC decisions, was used to test the pipeline&apos;s efficacy.
        The pipeline achieved a validity rate of 76.6%, with the primary
        failure mode being the absence of a structural marker. Validity is
        broadly consistent across years, ranging from 68% to 86%, with a modest
        decline in 2024 that likely reflects a higher proportion of simplified
        procedure decisions.
      </p>

      <figure className="my-8">
        <img
          src="/images/Lextract_Evaluate_Diagram.png"
          alt="Validity rates of the Lextract pipeline"
          className="mx-auto w-full border border-neutral-200 bg-white p-2 dark:border-neutral-800"
        />
        <figcaption className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Figure 2: Validity Rates of the Pipeline.
        </figcaption>
      </figure>

      <h2 className={h2}>research impact statement</h2>
      <p className={p}>
        Lextract powers the database of{" "}
        <a
          href="https://jurismercatus.shriyanyamali.com/"
          target="_blank"
          className={link}
        >
          JurisMercatus
        </a>
        , an open source search interface that allows users to semantically
        search for market definitions. JurisMercatus has been used by members of
        the antitrust community, including researchers, practitioners, and
        students, to locate and compare market definitions more efficiently than
        would be possible through manual review.
      </p>

      <h2 className={h2}>limitations</h2>
      <p className={p}>
        This system is not perfect and contains inaccuracies. Because headings
        used to identify market definition sections vary across decisions, what
        constitutes a market definition is heuristically defined, which can lead
        to inaccuracies when source texts deviate from expected patterns. The
        quality of extraction is also limited by the quality of the input.
        Missing pages or unconventional language may lead to partial,
        hallucinated, or inaccurate results.
      </p>

      <p className={p}>
        Although decisions are adjudicated in many languages, the pipeline
        excludes decisions not provided in English in order to maintain
        accuracy. Lextract currently uses Google Gemini, but it is
        model-agnostic and could be refactored to use other hosted or local LLMs.
      </p>

      <div className="my-6 overflow-x-auto border border-neutral-200 dark:border-neutral-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-100 dark:bg-neutral-900">
            <tr>
              <th className="px-3 py-2">Model Type</th>
              <th className="px-3 py-2">Accuracy</th>
              <th className="px-3 py-2">Context Length</th>
              <th className="px-3 py-2">Speed</th>
              <th className="px-3 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Hosted L, eg. GPT-4o", "High", "Very High", "Moderate", "High"],
              ["Hosted S, eg. Gemini Flash", "Moderate", "High", "Fast", "Moderate"],
              ["Local L, eg. DeepSeek 67B", "Moderate", "Medium", "Slow", "Low"],
              ["Local S, eg. LLaMA 3-8B", "Low", "Low", "Moderate", "Low"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-neutral-200 dark:border-neutral-800">
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-2 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400">
        Table II: Comparison of relative capabilities when extracting relevant
        market definitions.
      </p>

      <h2 className={h2}>AI usage disclosure</h2>
      <p className={p}>
        Lextract uses Google Gemini 2.0 Flash at runtime to identify
        market-definition sections and extract individual definitions from
        decision text. Generative AI tools were used to assist with development
        to the extent of code refactoring and manuscript proofreading. The
        author reviewed, edited, and validated all AI-assisted outputs.
      </p>

      <h2 className={h2}>acknowledgements</h2>
      <p className={p}>
        I am grateful to Professor Thibault Schrepel of Stanford Law School for
        his invaluable advisement and guidance throughout the course of this
        project. This research received no funding from any government agency,
        university, company, or non-profit organization.
      </p>

      <h2 className={h2}>conflict of interest</h2>
      <p className={p}>The author declares no conflict of interest.</p>
    </section>
  );
}
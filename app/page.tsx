export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <span className="underline decoration-2 decoration-amber-500 mr-[0.125rem]">
          Lextract
        </span>
        : An Automated Market Definition Extractor
      </h1>
      <p className="mb-6 text-lg">
        Lextract is an automated Python pipeline that automatically extract
        relevant market definitions from the European Commission’s merger and
        antitrust case decisions. Designed for researchers and competition law
        experts, it makes extracting relevant market definitions from many cases
        at once quick and scalable.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        what it does
      </h2>

      <p className="mb-6 text-lg">
        Extracts relevant market definitions scraped from the{" "}
        <a
          href="https://competition-cases.ec.europa.eu/search"
          target="_blank"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
        >
          European Commission’s case search portal
        </a>
        . It uses pandas, PyPDF2, openpyxl, and Google Gemini to automate the
        extraction process, making it easy to analyze large volumes of case data
        efficiently.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        how it works
      </h2>

      <p className="mb-6 text-lg">
        There are 6 steps in the pipeline:{" "}
        <span className="font-semibold text-amber-500">1)</span> Scrape decision
        PDF links and corresponding metadata.{" "}
        <span className="font-semibold text-amber-500">2)</span> Extract text
        from the PDFs and exclude irrelevant cases.{" "}
        <span className="font-semibold text-amber-500">3)</span> Use Google
        Gemini to the extract market definitions section.{" "}
        <span className="font-semibold text-amber-500">4)</span> Isolate each
        individual market definition and save it as a JSON file.{" "}
        <span className="font-semibold text-amber-500">5)</span> Remove markdown
        fences from the JSON output.{" "}
        <span className="font-semibold text-amber-500">6)</span> Combine the
        JSON files into one file.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        research applications
      </h2>
      <p className="mb-6 text-lg">
        This tool is intended to support research in competition law, antitrust
        policy, mergers, and economic regulation. Outputs can be filtered,
        extended, applied, or repurposed to fit a wide range of empirical and
        legal research projects.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        get started
      </h2>
      <p className="mb-6 text-lg">
        Lextract is easy to run on your machine. All you need is Git, Python, a
        Gemini API key, and a list of cases. Follow the{" "}
        <a
          href="/docs"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
        >
          documentation
        </a>{" "}
        to get started.
      </p>

      <div>
        <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
          example output
        </h2>
        <div>
          <pre className="mb-6 text-lg whitespace-pre-wrap font-mono rounded text-black dark:text-white">
            <code>
              <span>{`[`}</span>
              {"\n  "}
              <span>{`{`}</span>
              {"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"case_number"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"M.1234"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"year"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"2019"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"policy_area"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"Merger"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"link"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                "https://ec.europa.eu/decision/path.pdf"
              </span>
              ,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"topic"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"Scope of phone markets"</span>,
              {"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"text"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                "In the scope of the phone markets was..."
              </span>
              {"\n  "}
              <span>{`},`}</span>
              {"\n  "}
              <span>{`{`}</span>
              {"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"case_number"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"M.2345"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"year"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"2023"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"policy_area"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">"Merger"</span>,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"link"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                "https://ec.europa.eu/decision/path.pdf"
              </span>
              ,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"topic"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                "Relevant product markets of..."
              </span>
              ,{"\n    "}
              <span className="text-emerald-500 dark:text-green-400">"text"</span>:{" "}
              <span className="text-blue-600 dark:text-blue-400">
                "The relevant product markets are the..."
              </span>
              {"\n  "}
              <span>{`}`}</span>
              {"\n"}
              <span>{`]`}</span>
            </code>
          </pre>
        </div>
      </div>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        usage example
      </h2>
      <p className="mb-6 text-lg">
        This code was used in order to create the database for{" "}
        <a
          href="https://jurismercatus.vercel.app/"
          target="_blank"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
        >
          JurisMercatus
        </a>
        , a market definition database that has semantic search capabilities.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        license
      </h2>
      <p className="mb-6 text-lg">
        Lextract and this website are licensed under the AGPL-3.0 License. View
        the{" "}
        <a
          href="/license"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
        >
          full license
        </a>
        .
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        attribution
      </h2>
      <p className="mb-6 text-lg">
        Please include the following citation:
        <code className="block mt-2 bg-neutral-200 dark:bg-[#181818] p-4">
          This project uses code from the Lextract repository Copyright (c) 2025
          Shriyan Yamali, licensed under the GNU Affero General Public License
          v3.0 (AGPL-3.0). https://github.com/shriyanyamali/Lextract
        </code>
      </p>
    </section>
  );
}

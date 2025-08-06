export const metadata = {
  title: "Docs",
  description: "Docs for Lextract with installation instructions and setup.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Docs</h1>

      <p className="mb-6 text-lg border-l-2 pl-3 border-amber-500">
        Note: At no point throughout the installation, setup, or usage of this
        code should you change the location or name of any files as scripts rely
        on the original names.
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        prerequisites
      </h2>

      <p className="mb-6 text-lg">
        <ul>
          <li>
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
            >
              Git
            </a>
          </li>
          <li>
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
            >
              Python
            </a>
          </li>
          <li>
            <a
              href="https://ai.google.dev/"
              target="_blank"
              className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
            >
              Gemini Key
            </a>
          </li>
        </ul>
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        gemini api key
      </h2>
      <div className="mb-6 text-lg">
        <p className="mb-4">
          You can get a free Gemini API key{" "}
          <a
            href="https://ai.google.dev/"
            target="_blank"
            className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
          >
            here
          </a>
          . The code defaults to the Gemini 2.0 Flash model for its higher
          free-tier limits.
        </p>

        <p className="mb-4">
          Gemini 2.0 Flash should be suitable for analyzing 50-100 cases/day
          depending on the length of the case decisions. See model options here
          and rate limits here.
        </p>
      </div>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        installation
      </h2>
      <p className="mb-6 text-lg">
        <div className="block mt-2 bg-[#F2F0EF] dark:bg-[#181818] p-4">
          <p className="text-emerald-600 dark:text-emerald-400"># Clone the repo</p>
          <p className="mb-4">
            git clone https://github.com/shriyanyamali/Lextract.git
          </p>
          <p className="text-emerald-600 dark:text-emerald-400">
            # Change into the project directory
          </p>
          <p className="mb-4">cd Lextract</p>
          <p className="text-emerald-600 dark:text-emerald-400">
            # Install the required packages pip
          </p>
          install -r requirements.txt
        </div>
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        setup
      </h2>

      <p className="mb-6 text-lg">
        <p className="mb-1">1. Remove .gitkeep files:</p>

        <div className="block bg-[#F2F0EF] dark:bg-[#181818] p-4">
          <p className="text-emerald-600 dark:text-emerald-400"># macOS / Linux</p>
          <p className="mb-4">
            rm json/.gitkeep data/extracted_batches/.gitkeep
            data/extracted_sections/.gitkeep
          </p>
          <p className="text-emerald-600 dark:text-emerald-400"># PowerShell</p>
          <p className="mb-4">
            Remove-Item json/.gitkeep, data/extracted_batches/.gitkeep,
            data/extracted_sections/.gitkeep -Force
          </p>
          <p className="text-emerald-600 dark:text-emerald-400"># Command Prompt</p>
          del json\.gitkeep data\extracted_batches\.gitkeep
          data\extracted_sections\.gitkeep
        </div>

        <p className="mt-6">
          2. Go to{" "}
          <a
            href="https://competition-cases.ec.europa.eu/search"
            target="_blank"
            className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
          >
            competition-cases.ec.europa.eu/search
          </a>{" "}
          and export the Merger and Antitrust cases you want to process.
        </p>

        <p className="mt-6">
          3. Rename the exported excel file cases.xlsx. Move the file into the
          data directory.
        </p>

        <p className="mt-6">
          4. pen the run_pipeline.py script. On line 33, follow the instructions
          and set CHUNKS_SIZE equal to 79, 80, or both.
        </p>

        <p className="mt-4 mb-1">
          5. Set the GEMINI_API_KEY Environment Variable:
        </p>

        <div className="block m bg-[#F2F0EF] dark:bg-[#181818] p-4">
          <p className="text-emerald-600 dark:text-emerald-400"># macOS / Linux</p>
          <p className="mb-4">export GEMINI_API_KEY="your-api-key-here"</p>
          <p className="text-emerald-600 dark:text-emerald-400"># PowerShell</p>
          <p className="mb-4">$env:GEMINI_API_KEY="your-api-key-here"</p>
          <p className="text-emerald-600 dark:text-emerald-400"># Command Prompt</p>
          set GEMINI_API_KEY=your-api-key-here
        </div>

        <p className="mt-6">
          6. Run the pipeline:{" "}
          <span className="bg-[#F2F0EF] dark:bg-[#181818] px-2 py-1">python run_pipeline.py</span>
        </p>
      </p>

      <h2 className="underline decoration-1 decoration-amber-500 text-lg font-semibold mt-10 mb-4">
        testing
      </h2>
      <p className="mb-6 text-lg">
        <p>
          Run all tests:{" "}
          <span className="bg-[#F2F0EF] dark:bg-[#181818] px-2 py-1">pytest -q</span>
        </p>

        <p className="mt-6">
          Run all tests with coverage report:{" "}
          <span className="bg-[#F2F0EF] dark:bg-[#181818] px-2 py-1">
            pytest --cov=scripts --cov=tests
          </span>
        </p>

        <div className="block mt-6 bg-[#F2F0EF] dark:bg-[#181818] p-4">
          make test <span className="text-emerald-600 dark:text-emerald-400"># Run all tests</span>{" "}
          <br />
          make coverage{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            # Run tests with coverage report
          </span>{" "}
          <br />
          make format{" "}
          <span className="text-emerald-600 dark:text-emerald-400"># Auto-format code</span> <br />
          make lint <span className="text-emerald-600 dark:text-emerald-400"># Lint code</span> <br />
          make clean{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            # Remove __pycache__ and test artifacts
          </span>{" "}
          <br />
        </div>
      </p>

      <p className="mb-6 text-lg">
        For more, see the{" "}
        <a
          href="https://github.com/shriyanyamali/Lextract?tab=readme-ov-file#installation"
          className="text-amber-700 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
          target="_blank"
        >
          GitHub README
        </a>
        .
      </p>
    </section>
  );
}

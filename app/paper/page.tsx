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
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Paper</h1>

      <p className={p}>
        This paper is forthcoming. You can view the full PDF
        submission at{" "}
        <a href="/paper.pdf" target="_blank" className={link}>
          here
        </a>
        .
      </p>

      <h2 className={h2}>abstract</h2>
      <p className={p}>
        Relevant market definitions are central to merger and antitrust
        analysis, but collecting them at scale from European Commission
        decisions is difficult because the decisions are numerous and
        heterogeneous in structure and wording. We present Lextract, an
        open-source pipeline that filters decision PDFs, uses Gemini 2.0 Flash
        in two calls to locate the market-definition section and to isolate
        individual definitions, and stores the results as JSON. Applied to 600
        cases, it produced 4,105 records that feed JurisMercatus, a
        semantic-search interface. We document the prompts, settings, exclusion
        rules and thresholds, give a worked example from source text to record,
        and combine the model with three symbolic quality checks, namely a
        structural validity test derived from 50 manually checked definitions, a
        source-fidelity test that checks whether each record occurs verbatim in
        its decision, and a manual inspection of 100 records. Of the records,
        76.6% pass the structural test. Against all 699 retrievable decisions,
        79% of the 4,067 verifiable records are verbatim and 9% near-verbatim.
        The fidelity test flags the remaining 12% as absent from their source,
        three quarters of them from short simplified-procedure decisions without
        market analysis, and removes them in a cleaned release of 3,607 records.
        The structural test accepts 71% of the flagged records, which shows that
        checking output against the source text adds information that
        resemblance-based checks miss.
      </p>

      <h2 className={h2}>keywords</h2>
      <p className={p}>
        legal information extraction, competition law, relevant market
        definition, large language models, quality control, European Commission
      </p>
      <h2 className={h2}>acknowledgements</h2>
      <p className={p}>
        I am grateful to Professor Thibault Schrepel of Stanford Law School for
        his invaluable advisement and guidance throughout the course of this
        project. This research received no funding from any government agency,
        university, company, or non-profit organization.
      </p>
    </section>
  );
}

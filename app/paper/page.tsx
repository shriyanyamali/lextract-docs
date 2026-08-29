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
        This paper is currently under review. You can view the full PDF
        submission at{" "}
        <a href="/paper.pdf" target="_blank" className={link}>
          here
        </a>
        .
      </p>

      <h2 className={h2}>abstract</h2>
      <p className={p}>
        Relevant market definitions are central to merger and antitrust
        analysis, but extracting them at scale from European Commission
        decisions is difficult be- cause the documents are numerous and
        heterogeneous in structure and language. We present Lextract, an
        open-source Python pipeline that combines document collection and
        filtering with large-language-model-based identification of market-
        definition sections and individual definitions. The extracted records
        are stored as structured JSON and power JurisMercatus, a semantic-search
        interface for market definitions. We evaluate 4,105 definitions
        extracted from more than 600 Commis- sion decisions using a structural
        validity procedure derived from 50 manually ver- ified definitions.
        Overall, 76.6% satisfy all validity criteria; the main failure mode is
        the absence of a recognized structural marker. The results show that
        Lextract can produce a large, reproducible collection of structurally
        well-formed market defini- tions while also revealing the need for a
        larger gold-standard evaluation of end-to- end extraction accuracy.
      </p>

      <h2 className={h2}>keywords</h2>
      <p className={p}>
        legal information extraction, competition law, relevant market
        definition, large language models, European Commission
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

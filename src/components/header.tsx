import Image from "next/image";

export function Header() {
  return (
    <div className="h-[300px] flex flex-col justify-end mt-12 pb-12">
      <div className="text-center">
        <div className="mb-2">
          <Image
            src="/magnolia.png"
            alt="Magnolia flower"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>
        <h1 className="text-5xl font-normal mb-4 text-[var(--color-primary)]">
          Liana & Jordan
        </h1>
        <p className="text-xl mb-2 text-[var(--color-text-light)]">
          JUNE 21, 2025 • OMAHA, NE
        </p>
      </div>
    </div>
  );
}

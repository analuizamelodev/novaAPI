-- CreateTable
CREATE TABLE "Pessoas" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cidadeId" INTEGER NOT NULL,

    CONSTRAINT "Pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pessoas_email_key" ON "Pessoas"("email");

-- AddForeignKey
ALTER TABLE "Pessoas" ADD CONSTRAINT "Pessoas_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Autor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Livros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "autorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    CONSTRAINT "Livros_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

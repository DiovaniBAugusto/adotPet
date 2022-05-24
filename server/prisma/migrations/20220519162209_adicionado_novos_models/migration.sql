-- CreateTable
CREATE TABLE "checklistForm" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,

    CONSTRAINT "checklistForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklistItemForm" (
    "id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "checklistId" TEXT NOT NULL,

    CONSTRAINT "checklistItemForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" TEXT NOT NULL,
    "animalType" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklist" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "animalType" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,

    CONSTRAINT "checklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "checklistItem" (
    "id" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "checklistId" TEXT NOT NULL,

    CONSTRAINT "checklistItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "checklistForm" ADD CONSTRAINT "checklistForm_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklistItemForm" ADD CONSTRAINT "checklistItemForm_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "checklistForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklist" ADD CONSTRAINT "checklist_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "checklistItem" ADD CONSTRAINT "checklistItem_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

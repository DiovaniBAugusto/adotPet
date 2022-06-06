-- CreateTable
CREATE TABLE "session" (
    "sid" TEXT NOT NULL,
    "sess" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("sid")
);

-- CreateIndex
CREATE UNIQUE INDEX "session_sid_key" ON "session"("sid");

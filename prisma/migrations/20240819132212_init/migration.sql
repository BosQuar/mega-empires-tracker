-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cuid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "hash" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Turn" (
    "id" SERIAL NOT NULL,
    "cuid" TEXT NOT NULL,
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gameId" INTEGER NOT NULL,
    "turnNumber" INTEGER NOT NULL,
    "cardsBought" TEXT[],
    "cardsCost" INTEGER NOT NULL,
    "cardsDiscount" INTEGER NOT NULL,
    "cities" INTEGER NOT NULL,
    "people" INTEGER NOT NULL,
    "astAdvance" INTEGER NOT NULL,
    "isDone" BOOLEAN NOT NULL,
    "calamities" TEXT[],
    "monumentRed" INTEGER NOT NULL,
    "monumentGreen" INTEGER NOT NULL,
    "monumentBlue" INTEGER NOT NULL,
    "monumentOrange" INTEGER NOT NULL,
    "monumentYellow" INTEGER NOT NULL,
    "writtenRecordRed" INTEGER NOT NULL,
    "writtenRecordGreen" INTEGER NOT NULL,
    "writtenRecordBlue" INTEGER NOT NULL,
    "writtenRecordOrange" INTEGER NOT NULL,
    "writtenRecordYellow" INTEGER NOT NULL,

    CONSTRAINT "Turn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_cuid_key" ON "User"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Turn_id_key" ON "Turn"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Turn_cuid_key" ON "Turn"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("cuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turn" ADD CONSTRAINT "Turn_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turn" ADD CONSTRAINT "Turn_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

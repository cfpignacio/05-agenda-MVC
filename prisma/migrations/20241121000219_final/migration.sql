/*
  Warnings:

  - You are about to drop the column `name` on the `Contacto` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `Contacto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstname` to the `Contacto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Contacto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Contacto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Contacto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contacto` DROP COLUMN `name`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `firstname` VARCHAR(20) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(20) NOT NULL,
    ADD COLUMN `phone` VARCHAR(100) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Contacto_phone_key` ON `Contacto`(`phone`);

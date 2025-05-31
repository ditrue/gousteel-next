-- CreateTable
CREATE TABLE `Category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    `deleted_at` TIMESTAMP NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `category_id` BIGINT NULL,
    `cover` VARCHAR(255) NULL,
    `title` VARCHAR(100) NULL,
    `description` VARCHAR(255) NULL,
    `body` LONGTEXT NULL,
    `view` INTEGER NULL DEFAULT 0,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    `admin_user_id` BIGINT NULL,
    `started_at` TIMESTAMP NULL,
    `ended_at` TIMESTAMP NULL,
    `deleted_at` TIMESTAMP NULL,
    `url` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

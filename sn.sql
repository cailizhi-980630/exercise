/*
 Navicat Premium Data Transfer

 Source Server         : clz
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : sn

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 07/01/2021 19:07:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `un` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `amount1` int(255) NULL DEFAULT NULL,
  `amount2` int(255) NULL DEFAULT NULL,
  `amount3` int(255) NULL DEFAULT NULL,
  `amount4` int(255) NULL DEFAULT NULL,
  `amount5` int(255) NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('11111111', 16, 1, 1, 1, 1);
INSERT INTO `cart` VALUES ('1287451331', 3, NULL, NULL, NULL, 2);
INSERT INTO `cart` VALUES ('cailizhi', 16, 4, 1, 6, 0);

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop`  (
  `id` int(11) NOT NULL,
  `trade` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `nprice` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `amount` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES (1, '全自动加热', 179.00, '218.00', 'https://imgservice.suning.cn/uimg1/b2c/image/lldH7DtRq_Arf7VpSALIWg.jpg_60w_60h_4e', 'amount1');
INSERT INTO `shop` VALUES (2, '六组电动转盘', 329.00, '368.00', 'https://imgservice.suning.cn/uimg1/b2c/image/H4vA7OfBO-dUcouMi9rRfg.jpg_60w_60h_4e', 'amount2');
INSERT INTO `shop` VALUES (3, '熏蒸足浴盆', 199.00, '220.60', 'https://imgservice.suning.cn/uimg1/b2c/image/MGYNz0PGALkGFwu-SP6G6w.jpg_60w_60h_4e', 'amount3');
INSERT INTO `shop` VALUES (4, '折叠基础款', 209.00, '233.20', 'https://imgservice.suning.cn/uimg1/b2c/image/c632yomLZOxddtLkGMvEvw.jpg_60w_60h_4e', 'amount4');
INSERT INTO `shop` VALUES (5, '折叠升级款', 199.00, '244.60', 'https://imgservice.suning.cn/uimg1/b2c/image/pEFuZxjYHF8HOY4n9ujnGA.jpg_60w_60h_4e', 'amount5');

-- ----------------------------
-- Table structure for snuser
-- ----------------------------
DROP TABLE IF EXISTS `snuser`;
CREATE TABLE `snuser`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of snuser
-- ----------------------------
INSERT INTO `snuser` VALUES (1, '1287451331', 'cailizhi980630');
INSERT INTO `snuser` VALUES (2, 'cailizhi', '1287451331');
INSERT INTO `snuser` VALUES (9, 'A1287451331', '1287451331a');
INSERT INTO `snuser` VALUES (3, '11111111', '11111111');

SET FOREIGN_KEY_CHECKS = 1;

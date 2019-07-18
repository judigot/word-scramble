-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2019 at 09:12 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appjudigot_wordscramble`
--
CREATE DATABASE IF NOT EXISTS `appjudigot_wordscramble` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `appjudigot_wordscramble`;

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `picture` varchar(32) NOT NULL,
  `word` varchar(50) CHARACTER SET latin1 NOT NULL,
  `mode` enum('normal','hard','very hard','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `picture`, `word`, `mode`) VALUES
(1, 'blank.jpg', 'act', 'normal'),
(2, 'blank.jpg', 'dog', 'normal'),
(3, 'blank.jpg', 'red', 'normal'),
(4, 'blank.jpg', 'ads', 'normal'),
(5, 'blank.jpg', 'mad', 'normal'),
(6, 'blank.jpg', 'cat', 'normal'),
(7, 'blank.jpg', 'bed', 'normal'),
(8, 'blank.jpg', 'sad', 'normal'),
(9, 'blank.jpg', 'pet', 'normal'),
(10, 'blank.jpg', 'low', 'normal'),
(11, 'blank.jpg', 'man', 'normal'),
(12, 'blank.jpg', 'old', 'normal'),
(13, 'blank.jpg', 'can', 'normal'),
(14, 'blank.jpg', 'saw', 'normal'),
(15, 'blank.jpg', 'one', 'normal'),
(16, 'blank.jpg', 'out', 'normal'),
(17, 'blank.jpg', 'day', 'normal'),
(18, 'blank.jpg', 'new', 'normal'),
(19, 'blank.jpg', 'old', 'normal'),
(20, 'blank.jpg', 'boy', 'normal'),
(21, 'blank.jpg', 'jude', 'hard'),
(22, 'blank.jpg', 'jazz', 'hard'),
(23, 'blank.jpg', 'buzz', 'hard'),
(24, 'blank.jpg', 'quiz', 'hard'),
(25, 'blank.jpg', 'jinx', 'hard'),
(26, 'blank.jpg', 'jack', 'hard'),
(27, 'blank.jpg', 'jock', 'hard'),
(28, 'blank.jpg', 'jump', 'hard'),
(29, 'blank.jpg', 'cozy', 'hard'),
(30, 'blank.jpg', 'time', 'hard'),
(31, 'blank.jpg', 'jerk', 'hard'),
(32, 'blank.jpg', 'joke', 'hard'),
(33, 'blank.jpg', 'bike', 'hard'),
(34, 'blank.jpg', 'lion', 'hard'),
(35, 'blank.jpg', 'jeep', 'hard'),
(36, 'blank.jpg', 'lazy', 'hard'),
(37, 'blank.jpg', 'blue', 'hard'),
(38, 'blank.jpg', 'flow', 'hard'),
(39, 'blank.jpg', 'kick', 'hard'),
(40, 'blank.jpg', 'butt', 'hard'),
(41, 'blank.jpg', 'theft', 'very hard'),
(42, 'blank.jpg', 'waist', 'very hard'),
(43, 'blank.jpg', 'water', 'very hard'),
(44, 'blank.jpg', 'whale', 'very hard'),
(45, 'blank.jpg', 'wheat', 'very hard'),
(46, 'blank.jpg', 'wheel', 'very hard'),
(47, 'blank.jpg', 'above', 'very hard'),
(48, 'blank.jpg', 'actor', 'very hard'),
(49, 'blank.jpg', 'admit', 'very hard'),
(50, 'blank.jpg', 'album', 'very hard'),
(51, 'blank.jpg', 'blind', 'very hard'),
(52, 'blank.jpg', 'brain', 'very hard'),
(53, 'blank.jpg', 'dance', 'very hard'),
(54, 'blank.jpg', 'fraud', 'very hard'),
(55, 'blank.jpg', 'laugh', 'very hard'),
(56, 'blank.jpg', 'photo', 'very hard'),
(57, 'blank.jpg', 'power', 'very hard'),
(58, 'blank.jpg', 'sound', 'very hard'),
(59, 'blank.jpg', 'smoke', 'very hard'),
(60, 'blank.jpg', 'judge', 'very hard');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `scoreId` int(11) NOT NULL,
  `playerName` varchar(32) NOT NULL,
  `score` int(11) NOT NULL,
  `mode` enum('normal','hard','very hard','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`scoreId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `scoreId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

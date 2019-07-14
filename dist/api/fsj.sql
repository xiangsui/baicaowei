-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-12 07:08:37
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fsj`
--

-- --------------------------------------------------------

--
-- 表的结构 `xiangsui`
--

CREATE TABLE `xiangsui` (
  `id` int(6) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `address` varchar(256) NOT NULL,
  `qq` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xiangsui`
--

INSERT INTO `xiangsui` (`id`, `username`, `password`, `tel`, `address`, `qq`) VALUES
(1, 'fsj', '000000', '15695801172', '大连设计城904', '1611043922'),
(2, 'xiang', '123456', '19995801172', 'tong', '2222222'),
(3, 'zyy', 'xiaokeai', '15942492850', 'tong', '1154423801'),
(4, 'cunji', '000000', '13131313131', 'dalian', '27970484'),
(5, 'zyy', 'dashazi', '15942492850', 'tong', '1154423801'),
(6, '左边傻子', '000000', '19905201314', 'qianfeng', '8520741'),
(7, 'fs', 'ddasd', '19905201314', 'qianfeng', '8520741'),
(8, 'ywh', 'dashazi', '19905201314', 'qianfeng', '8520741');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `xiangsui`
--
ALTER TABLE `xiangsui`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `xiangsui`
--
ALTER TABLE `xiangsui`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

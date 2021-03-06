-- phpMyAdmin SQL Dump
-- version 3.3.7deb5build0.10.10.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: Dez 12, 2011 as 08:02 AM
-- Versão do Servidor: 5.1.49
-- Versão do PHP: 5.3.3-1ubuntu9.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `biblioteca_development`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `areas`
--

CREATE TABLE IF NOT EXISTS `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=39 ;

--
-- Extraindo dados da tabela `areas`
--

INSERT INTO `areas` (`id`, `nome`, `created_at`, `updated_at`) VALUES
(1, 'PORTUGUÊS', '2011-09-21 18:14:20', '2011-09-21 18:14:20'),
(2, 'MATEMÁTICA', '2011-09-21 18:14:26', '2011-09-21 18:14:26'),
(3, 'LITERATURA', '2011-09-21 18:14:31', '2011-09-21 18:14:31'),
(4, 'FILOSOFIA', '2011-09-26 11:27:21', '2011-09-26 11:27:21'),
(5, 'ARTES ', '2011-10-04 12:19:52', '2011-10-04 12:19:52'),
(6, 'LINGUA ESTRANGEIRA', '2011-10-04 12:20:28', '2011-10-04 12:20:28'),
(7, 'ANTROPOLOGIA', '2011-10-04 12:20:46', '2011-10-04 12:20:46'),
(8, 'HISTÓRIA', '2011-10-04 12:20:53', '2011-10-04 12:20:53'),
(9, 'PSICOLOGIA', '2011-10-04 12:22:31', '2011-10-04 12:22:31'),
(10, 'SOCIOLOGIA', '2011-10-04 12:22:37', '2011-10-04 12:22:37'),
(11, 'CULTURA', '2011-10-04 12:22:42', '2011-10-04 12:22:42'),
(12, 'EDUCAÇÃO', '2011-10-04 12:25:28', '2011-10-04 12:25:28'),
(13, 'DIREITO', '2011-10-04 12:25:45', '2011-10-04 12:25:45'),
(17, 'CIÊNCIA DA COMPUTAÇÃO', '2011-11-11 16:33:05', '2011-11-11 16:33:05'),
(18, 'FÍSICA', '2011-11-11 16:33:23', '2011-11-11 16:33:23'),
(19, 'QUIMICA', '2011-11-11 16:33:39', '2011-11-11 16:33:39'),
(20, 'ASTRONOMIA', '2011-11-11 16:33:55', '2011-11-11 16:33:55'),
(21, 'GEOCIÊNCIAS', '2011-11-11 16:34:08', '2011-11-11 16:34:08'),
(22, 'BIOLOGIA', '2011-11-11 16:34:26', '2011-11-11 16:34:26'),
(23, 'NUTRIÇÃO', '2011-11-11 16:35:00', '2011-11-11 16:35:00'),
(24, 'ENGENHARIA', '2011-11-11 16:35:17', '2011-11-11 16:35:17'),
(25, 'NUTRIÇÃO', '2011-11-11 16:35:30', '2011-11-11 16:35:30'),
(26, 'FONOAUDILOGIA', '2011-11-11 16:38:11', '2011-11-11 16:38:11'),
(27, 'AGRONOMIA', '2011-11-11 16:38:21', '2011-11-11 16:38:21'),
(28, 'ENGENHARIA FLORESTAL', '2011-11-11 16:38:42', '2011-11-11 16:38:42'),
(29, 'ENGENHARIA AGRÍCULA', '2011-11-11 16:39:29', '2011-11-11 16:39:29'),
(30, 'ZOOTECNIA', '2011-11-11 16:39:44', '2011-11-11 16:39:44'),
(31, 'CIÊNCIAS AGRÁRIAS', '2011-11-11 16:40:08', '2011-11-11 16:40:08'),
(32, 'TECNOLOGIA DA ELIMENTAÇÃO', '2011-11-11 16:40:31', '2011-11-11 16:40:31'),
(33, 'CIÊNCIAS SOCIAIS', '2011-11-11 16:40:46', '2011-11-11 16:40:46'),
(34, 'ADMINISTRAÇÃO', '2011-11-11 16:41:00', '2011-11-11 16:41:00'),
(35, 'ECONOMIA', '2011-11-11 16:41:08', '2011-11-11 16:41:08'),
(36, 'URBANISMO', '2011-11-11 16:41:20', '2011-11-11 16:41:20'),
(37, 'CIÊNCIAS HUMANAS', '2011-11-11 16:41:57', '2011-12-07 17:26:13'),
(38, 'GEOGRAFIA', '2011-11-11 16:42:29', '2011-11-11 16:42:29');

-- ============================================================
-- ARQUIVO CORRIGIDO: 3bd-proesporte-treinos.sql
-- Ajustado para conformidade com a estrutura (Case Sensitive)
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. Inserção de Equipamentos
INSERT INTO `Equipamento` (`id_equipamento`, `nome`, `categoria`) VALUES
(1, 'Barra Fixa/Porta', 'Puxar/Empurrar'),
(2, 'Barras Paralelas', 'Empurrar'),
(3, 'Paralelas Baixas/Médias (Paraletes)', 'Empurrar/Core'),
(4, 'Argolas Olímpicas', 'Misto'),
(5, 'Equipamento de Praça/Prefeitura', 'Geral'),
(6, 'Chão/solo', 'Geral');

-- 2. Inserção de Exercícios (Empurrar)
INSERT INTO `Exercicio` (`id_exercicio`, `nome`, `nivel`, `tipo`, `descricao`, `grupo_muscular`) VALUES
(101, 'Flexão na Parede', 1, 'Dinâmico', 'Flexão feita com as mãos apoiadas na parede e corpo inclinado.', 'Empurrar'),
(102, 'Flexão Inclinada', 2, 'Dinâmico', 'Mãos apoiadas em uma superfície alta (banco/mesa), pés no chão.', 'Empurrar'),
(103, 'Tríceps Banco', 2, 'Dinâmico', 'De costas para um banco, desça o corpo flexionando os cotovelos.', 'Empurrar'),
(104, 'Flexão Padrão', 3, 'Dinâmico', 'Corpo reto, mãos no chão na largura dos ombros, peito até o chão.', 'Empurrar'),
(105, 'Flexão Aberta', 3, 'Dinâmico', 'Mãos posicionadas além da largura dos ombros para focar no peito.', 'Empurrar'),
(106, 'Dip (Paralelas)', 3, 'Dinâmico', 'Sustente o corpo nas barras paralelas e desça flexionando os braços.', 'Empurrar'),
(107, 'Extensão de Tríceps', 4, 'Dinâmico', 'Flexão focada nos cotovelos, levando a testa em direção às mãos.', 'Empurrar'),
(108, 'Flexão Declinada', 4, 'Dinâmico', 'Pés apoiados em superfície alta, mãos no chão. Aumenta carga nos ombros.', 'Empurrar'),
(109, 'Flexão Diamante', 4, 'Dinâmico', 'Mãos juntas formando um diamante, foco intenso no tríceps.', 'Empurrar'),
(110, 'Flexão Pike', 4, 'Dinâmico', 'Quadril elevado formando um V invertido, descendo o topo da cabeça.', 'Empurrar'),
(111, 'Flexão Arqueiro', 5, 'Dinâmico', 'Uma mão esticada para o lado enquanto o outro braço faz a flexão.', 'Empurrar'),
(112, 'Pseudo Flexão na Prancha', 5, 'Habilidade', 'Mãos na altura do quadril com inclinação do corpo para frente.', 'Empurrar'),
(113, 'Handstand (Estático)', 6, 'Habilidade', 'Equilíbrio de cabeça para baixo sobre as mãos (pode ser na parede).', 'Empurrar'),
(114, 'Flexão Russa', 6, 'Dinâmico', 'Flexão que transiciona para o apoio dos cotovelos no chão.', 'Empurrar'),
(115, 'Tuck Planche', 7, 'Habilidade', 'Sustentar o corpo apenas nas mãos com joelhos recolhidos no peito.', 'Empurrar'),
(116, 'Tuck Planche Avançada', 7, 'Habilidade', 'Tuck planche mas com as costas retas e joelhos afastados do peito.', 'Empurrar'),
(117, 'One Leg Planche', 8, 'Habilidade', 'Planche com uma perna esticada e a outra recolhida.', 'Empurrar'),
(118, 'Flexão na Handstand (HSPU)', 8, 'Habilidade', 'Flexão vertical completa estando na posição de parada de mão.', 'Empurrar'),
(119, 'Straddle Planche', 9, 'Habilidade', 'Corpo paralelo ao chão com pernas esticadas e abertas.', 'Empurrar'),
(120, 'Full Planche', 10, 'Habilidade', 'Corpo totalmente paralelo ao chão, braços esticados e pernas juntas.', 'Empurrar'),
(121, 'Maltesa', 10, 'Habilidade', 'Planche com braços bem abertos, posição de cruz na argola ou chão.', 'Empurrar');

-- 3. Inserção de Exercícios (Puxar)
INSERT INTO `Exercicio` (`id_exercicio`, `nome`, `nivel`, `tipo`, `descricao`, `grupo_muscular`) VALUES
(201, 'Pendurada Passiva', 1, 'Estático', 'Segurar na barra com braços esticados e corpo relaxado.', 'Puxar'),
(202, 'Remada com Toalha', 1, 'Dinâmico', 'Remada horizontal usando uma toalha presa em um ponto fixo.', 'Puxar'),
(203, 'Rear Delts no Chão', 1, 'Dinâmico', 'Deitado de costas, empurre os cotovelos contra o chão para subir o peito.', 'Puxar'),
(204, 'Ativação Escapular', 2, 'Dinâmico', 'Pendurado, mova apenas as escápulas para cima e para baixo.', 'Puxar'),
(205, 'Barra Australiana', 2, 'Dinâmico', 'Remada horizontal em barra baixa com pés no chão.', 'Puxar'),
(206, 'Barra Fixa', 3, 'Dinâmico', 'Puxar o corpo até o queixo passar a barra.', 'Puxar'),
(207, 'Skin the Cat', 4, 'Habilidade', 'Girar o corpo entre os braços pendurado na barra.', 'Puxar'),
(208, 'Tuck Back Lever', 5, 'Habilidade', 'Sustentação de costas para o chão com joelhos no peito.', 'Puxar'),
(209, 'Tuck Front Lever', 5, 'Habilidade', 'Sustentação de frente para a barra com joelhos no peito.', 'Puxar'),
(210, 'Back Lever', 8, 'Habilidade', 'Corpo totalmente esticado e paralelo ao chão, de costas para baixo.', 'Puxar'),
(211, 'Front Lever', 9, 'Habilidade', 'Corpo totalmente esticado e paralelo ao chão, de frente para a barra.', 'Puxar'),
(212, 'Victorian', 10, 'Habilidade', 'Sustentação horizontal abaixo das barras/argolas (nível elite).', 'Puxar');

-- 4. Inserção de Exercícios (Pernas)
INSERT INTO `Exercicio` (`id_exercicio`, `nome`, `nivel`, `tipo`, `descricao`, `grupo_muscular`) VALUES
(300, 'Agachamento no Sofá', 1, 'Dinâmico', 'Agachamento utilizando o sofá como referência de altura para sentar e levantar.', 'Pernas'),
(301, 'Elevação com Panturrilha', 1, 'Dinâmico', 'Elevação do corpo apoiando-se na ponta dos pés para ativação de panturrilhas.', 'Pernas'),
(302, 'Agachamento Padrão', 2, 'Dinâmico', 'Agachamento tradicional com pés afastados na largura dos ombros.', 'Pernas'),
(303, 'Agachamento Sumô', 3, 'Dinâmico', 'Agachamento com base ampla e pés apontados para fora.', 'Pernas'),
(304, 'Agachamento com Salto', 3, 'Dinâmico', 'Agachamento explosivo seguido de salto vertical.', 'Pernas'),
(305, 'Agachamento Cossack', 4, 'Dinâmico', 'Agachamento lateral profundo com transferência de peso.', 'Pernas'),
(306, 'Pistol Squat com Apoio', 5, 'Dinâmico', 'Agachamento unilateral com apoio das mãos ou suporte externo.', 'Pernas'),
(307, 'Agachamento Camarão (Inicial)', 5, 'Dinâmico', 'Agachamento unilateral com joelho posterior flexionado e leve apoio.', 'Pernas'),
(308, 'Pistol Squat', 6, 'Dinâmico', 'Agachamento unilateral completo sem apoio.', 'Pernas'),
(309, 'Flexão Nórdica Inversa', 6, 'Dinâmico', 'Controle excêntrico dos isquiotibiais inclinando o corpo para trás.', 'Pernas'),
(310, 'Pistol na Ponta dos Pés', 7, 'Dinâmico', 'Pistol squat executado apoiando-se apenas na ponta do pé.', 'Pernas'),
(311, 'Half Dragon Squat', 7, 'Habilidade', 'Agachamento unilateral profundo com maior exigência de mobilidade.', 'Pernas'),
(312, 'Sissy Squat', 8, 'Dinâmico', 'Agachamento com tronco inclinado para trás enfatizando quadríceps.', 'Pernas'),
(313, 'Flexão Nórdica', 9, 'Dinâmico', 'Execução completa da flexão nórdica com controle excêntrico e concêntrico.', 'Pernas'),
(314, 'Dragon Squat', 10, 'Habilidade', 'Agachamento unilateral avançado com grande exigência de força e mobilidade.', 'Pernas');

-- 5. Inserção de Exercícios (Abdômen)
INSERT INTO `Exercicio` (`id_exercicio`, `nome`, `nivel`, `tipo`, `descricao`, `grupo_muscular`) VALUES
(400, 'Toque no Calcanhar', 1, 'Dinâmico', 'Deitado, joelhos flexionados, toque alternadamente os calcanhares com as mãos.', 'Abdômen'),
(401, 'Abdominal Supra', 1, 'Dinâmico', 'Elevação parcial do tronco focando na contração do abdômen superior.', 'Abdômen'),
(402, 'Abdominal Infra', 1, 'Dinâmico', 'Elevação do quadril mantendo lombar no chão, focando no abdômen inferior.', 'Abdômen'),
(403, 'Canoinha', 2, 'Estático', 'Posição em V com braços e pernas elevadas, mantendo equilíbrio e contração.', 'Abdômen'),
(404, 'Abdominal Russo', 2, 'Dinâmico', 'Sentado, tronco levemente inclinado, rotações laterais do tronco.', 'Abdômen'),
(405, 'Abdominal Bicicleta', 2, 'Dinâmico', 'Movimento alternado de cotovelo com joelho oposto em rotação.', 'Abdômen'),
(406, 'Prancha em Quatro Apoios', 3, 'Estático', 'Prancha apoiando joelhos e mãos, mantendo tronco alinhado.', 'Abdômen'),
(407, 'Prancha Alta', 3, 'Estático', 'Prancha com apoio nas mãos e pés, corpo alinhado.', 'Abdômen'),
(408, 'Abdominal Alpinista', 3, 'Dinâmico', 'Em prancha alta, traga os joelhos alternadamente ao peito.', 'Abdômen'),
(409, 'Alpinista Cruzado', 3, 'Dinâmico', 'Versão cruzada do alpinista, levando joelho ao cotovelo oposto.', 'Abdômen'),
(410, 'Elevação de Pernas Dobradas na Barra', 3, 'Dinâmico', 'Suspenso na barra, eleve os joelhos mantendo controle.', 'Abdômen'),
(411, 'Elevação de Pernas Esticadas na Barra', 4, 'Dinâmico', 'Suspenso, eleve as pernas estendidas até a horizontal.', 'Abdômen'),
(412, 'Tuck L-Sit', 4, 'Habilidade', 'Apoiado nas mãos, mantenha joelhos recolhidos e corpo suspenso.', 'Abdômen'),
(413, 'Prancha Lateral', 4, 'Estático', 'Prancha apoiada em um antebraço, corpo alinhado lateralmente.', 'Abdômen'),
(414, 'One Leg L-Sit', 5, 'Habilidade', 'L-sit com uma perna estendida e outra recolhida.', 'Abdômen'),
(415, 'L-Sit', 6, 'Habilidade', 'Suspensão com pernas estendidas a 90 graus do tronco.', 'Abdômen'),
(416, 'Tuck Dragon Flag', 6, 'Habilidade', 'Dragon flag com joelhos recolhidos, controlando a descida.', 'Abdômen'),
(417, 'One Leg Dragon Flag', 7, 'Habilidade', 'Dragon flag com uma perna estendida e outra flexionada.', 'Abdômen'),
(418, 'Straddle Dragon Flag', 7, 'Habilidade', 'Dragon flag com pernas abertas para reduzir alavanca.', 'Abdômen'),
(419, 'Dragon Flag', 8, 'Habilidade', 'Elevação e descida do corpo mantendo alinhamento rígido.', 'Abdômen'),
(420, 'Bandeira Negativa', 8, 'Habilidade', 'Descida controlada da posição de bandeira.', 'Abdômen'),
(421, 'Bandeira com Pernas Abertas', 9, 'Habilidade', 'Bandeira mantendo pernas afastadas para maior controle.', 'Abdômen'),
(422, 'Tuck V-Sit', 9, 'Habilidade', 'Posição V com joelhos recolhidos e equilíbrio sobre as mãos.', 'Abdômen'),
(423, 'Bandeira', 10, 'Habilidade', 'Corpo totalmente horizontal sustentado pelos braços.', 'Abdômen'),
(424, 'V-Sit', 10, 'Habilidade', 'Posição em V com pernas estendidas e corpo suspenso.', 'Abdômen');

-- 6. Vinculos de progressao/regressao
UPDATE `Exercicio` SET `id_progressao` = 102 WHERE `id_exercicio` = 101;
UPDATE `Exercicio` SET `id_regressao` = 101, `id_progressao` = 104 WHERE `id_exercicio` = 102;
UPDATE `Exercicio` SET `id_progressao` = 107 WHERE `id_exercicio` = 103;
UPDATE `Exercicio` SET `id_regressao` = 102, `id_progressao` = 105 WHERE `id_exercicio` = 104;
UPDATE `Exercicio` SET `id_regressao` = 104, `id_progressao` = 108 WHERE `id_exercicio` = 105;
UPDATE `Exercicio` SET `id_regressao` = 103, `id_progressao` = 112 WHERE `id_exercicio` = 106;
UPDATE `Exercicio` SET `id_regressao` = 103 WHERE `id_exercicio` = 107;
UPDATE `Exercicio` SET `id_regressao` = 105, `id_progressao` = 110 WHERE `id_exercicio` = 108;
UPDATE `Exercicio` SET `id_regressao` = 104, `id_progressao` = 110 WHERE `id_exercicio` = 109;
UPDATE `Exercicio` SET `id_regressao` = 108, `id_progressao` = 113 WHERE `id_exercicio` = 110;
UPDATE `Exercicio` SET `id_regressao` = 108, `id_progressao` = 114 WHERE `id_exercicio` = 111;
UPDATE `Exercicio` SET `id_regressao` = 108, `id_progressao` = 114 WHERE `id_exercicio` = 112;
UPDATE `Exercicio` SET `id_regressao` = 110, `id_progressao` = 118 WHERE `id_exercicio` = 113;
UPDATE `Exercicio` SET `id_regressao` = 108, `id_progressao` = 117 WHERE `id_exercicio` = 114;
UPDATE `Exercicio` SET `id_regressao` = 112, `id_progressao` = 116 WHERE `id_exercicio` = 115;
UPDATE `Exercicio` SET `id_regressao` = 115, `id_progressao` = 117 WHERE `id_exercicio` = 116;
UPDATE `Exercicio` SET `id_regressao` = 116, `id_progressao` = 119 WHERE `id_exercicio` = 117;
UPDATE `Exercicio` SET `id_regressao` = 113 WHERE `id_exercicio` = 118;
UPDATE `Exercicio` SET `id_regressao` = 117, `id_progressao` = 120 WHERE `id_exercicio` = 119;
UPDATE `Exercicio` SET `id_regressao` = 119, `id_progressao` = 121 WHERE `id_exercicio` = 120;
UPDATE `Exercicio` SET `id_regressao` = 120 WHERE `id_exercicio` = 121;
UPDATE `Exercicio` SET `id_progressao` = 204 WHERE `id_exercicio` = 201;
UPDATE `Exercicio` SET `id_progressao` = 205 WHERE `id_exercicio` = 202;
UPDATE `Exercicio` SET `id_progressao` = 205 WHERE `id_exercicio` = 203;
UPDATE `Exercicio` SET `id_regressao` = 201, `id_progressao` = 206 WHERE `id_exercicio` = 204;
UPDATE `Exercicio` SET `id_regressao` = 202, `id_progressao` = 206 WHERE `id_exercicio` = 205;
UPDATE `Exercicio` SET `id_regressao` = 205, `id_progressao` = 207 WHERE `id_exercicio` = 206;
UPDATE `Exercicio` SET `id_regressao` = 206, `id_progressao` = 208 WHERE `id_exercicio` = 207;
UPDATE `Exercicio` SET `id_regressao` = 207, `id_progressao` = 210 WHERE `id_exercicio` = 208;
UPDATE `Exercicio` SET `id_regressao` = 206, `id_progressao` = 211 WHERE `id_exercicio` = 209;
UPDATE `Exercicio` SET `id_regressao` = 208 WHERE `id_exercicio` = 210;
UPDATE `Exercicio` SET `id_regressao` = 209, `id_progressao` = 212 WHERE `id_exercicio` = 211;
UPDATE `Exercicio` SET `id_regressao` = 211 WHERE `id_exercicio` = 212;
UPDATE `Exercicio` SET `id_progressao` = 302 WHERE `id_exercicio` = 300;
UPDATE `Exercicio` SET `id_progressao` = 302 WHERE `id_exercicio` = 301;
UPDATE `Exercicio` SET `id_regressao` = 300, `id_progressao` = 304 WHERE `id_exercicio` = 302;
UPDATE `Exercicio` SET `id_regressao` = 302, `id_progressao` = 306 WHERE `id_exercicio` = 303;
UPDATE `Exercicio` SET `id_regressao` = 302, `id_progressao` = 307 WHERE `id_exercicio` = 304;
UPDATE `Exercicio` SET `id_regressao` = 303, `id_progressao` = 308 WHERE `id_exercicio` = 305;
UPDATE `Exercicio` SET `id_regressao` = 305, `id_progressao` = 309 WHERE `id_exercicio` = 306;
UPDATE `Exercicio` SET `id_regressao` = 305, `id_progressao` = 310 WHERE `id_exercicio` = 307;
UPDATE `Exercicio` SET `id_regressao` = 306, `id_progressao` = 311 WHERE `id_exercicio` = 308;
UPDATE `Exercicio` SET `id_regressao` = 307, `id_progressao` = 312 WHERE `id_exercicio` = 309;
UPDATE `Exercicio` SET `id_regressao` = 308, `id_progressao` = 313 WHERE `id_exercicio` = 310;
UPDATE `Exercicio` SET `id_regressao` = 308, `id_progressao` = 314 WHERE `id_exercicio` = 311;
UPDATE `Exercicio` SET `id_regressao` = 309 WHERE `id_exercicio` = 312;
UPDATE `Exercicio` SET `id_regressao` = 309 WHERE `id_exercicio` = 313;
UPDATE `Exercicio` SET `id_regressao` = 311 WHERE `id_exercicio` = 314;
UPDATE `Exercicio` SET `id_progressao` = 403 WHERE `id_exercicio` = 400;
UPDATE `Exercicio` SET `id_progressao` = 404 WHERE `id_exercicio` = 401;
UPDATE `Exercicio` SET `id_progressao` = 406 WHERE `id_exercicio` = 402;
UPDATE `Exercicio` SET `id_regressao` = 400, `id_progressao` = 409 WHERE `id_exercicio` = 403;
UPDATE `Exercicio` SET `id_regressao` = 401, `id_progressao` = 410 WHERE `id_exercicio` = 404;
UPDATE `Exercicio` SET `id_regressao` = 401, `id_progressao` = 411 WHERE `id_exercicio` = 405;
UPDATE `Exercicio` SET `id_regressao` = 402, `id_progressao` = 412 WHERE `id_exercicio` = 406;
UPDATE `Exercicio` SET `id_regressao` = 406, `id_progressao` = 413 WHERE `id_exercicio` = 407;
UPDATE `Exercicio` SET `id_regressao` = 405, `id_progressao` = 414 WHERE `id_exercicio` = 408;
UPDATE `Exercicio` SET `id_regressao` = 408, `id_progressao` = 415 WHERE `id_exercicio` = 409;
UPDATE `Exercicio` SET `id_regressao` = 402, `id_progressao` = 416 WHERE `id_exercicio` = 410;
UPDATE `Exercicio` SET `id_regressao` = 410, `id_progressao` = 418 WHERE `id_exercicio` = 411;
UPDATE `Exercicio` SET `id_regressao` = 403, `id_progressao` = 419 WHERE `id_exercicio` = 412;
UPDATE `Exercicio` SET `id_regressao` = 407, `id_progressao` = 420 WHERE `id_exercicio` = 413;
UPDATE `Exercicio` SET `id_regressao` = 412, `id_progressao` = 421 WHERE `id_exercicio` = 414;
UPDATE `Exercicio` SET `id_regressao` = 414, `id_progressao` = 422 WHERE `id_exercicio` = 415;
UPDATE `Exercicio` SET `id_regressao` = 412, `id_progressao` = 423 WHERE `id_exercicio` = 416;
UPDATE `Exercicio` SET `id_regressao` = 416, `id_progressao` = 424 WHERE `id_exercicio` = 417;
UPDATE `Exercicio` SET `id_regressao` = 416, `id_progressao` = 424 WHERE `id_exercicio` = 418;
UPDATE `Exercicio` SET `id_regressao` = 417 WHERE `id_exercicio` = 419;
UPDATE `Exercicio` SET `id_regressao` = 419 WHERE `id_exercicio` = 420;
UPDATE `Exercicio` SET `id_regressao` = 420 WHERE `id_exercicio` = 421;
UPDATE `Exercicio` SET `id_regressao` = 415 WHERE `id_exercicio` = 422;
UPDATE `Exercicio` SET `id_regressao` = 421 WHERE `id_exercicio` = 423;
UPDATE `Exercicio` SET `id_regressao` = 422 WHERE `id_exercicio` = 424;

-- 7. Inserção na tabela de relacionamento Exercicio_Equipamento
INSERT INTO `Exercicio_Equipamento` (`id_exercicio`, `id_equipamento`) VALUES
(101, 6), (112, 6), (117, 6),
(102, 6), (113, 6), (118, 2),
(102, 3), (113, 5), (118, 3),
(103, 3), (114, 6), (118, 4),
(104, 6), (115, 6), (118, 6),
(105, 6), (115, 3), (119, 2),
(106, 2), (115, 2), (119, 3),
(106, 4), (115, 4), (119, 4),
(107, 3), (116, 2), (119, 6),
(107, 6), (116, 3), (120, 2),
(108, 6), (116, 4), (120, 3),
(109, 6), (116, 6), (120, 4),
(110, 3), (117, 2), (120, 6),
(110, 6), (117, 3), (121, 6),
(111, 6), (117, 4), (121, 4),
(201, 1), (208, 1), (208, 4),
(201, 4), (202, 5), (204, 1),
(205, 1), (205, 5), (206, 1),
(206, 4), (207, 1), (207, 4),
(209, 1), (209, 4), (210, 1),
(210, 4), (211, 1), (211, 4),
(212, 4), (212, 2),
(300, 6), (301, 6), (302, 6),
(303, 6), (304, 6), (305, 6),
(306, 6), (307, 6), (308, 6),
(309, 6), (310, 6), (311, 6),
(312, 6), (313, 6), (314, 6),
(400, 6), (415, 3), (401, 6),
(415, 4), (402, 6), (415, 6),
(403, 6), (416, 6), (404, 6),
(416, 5), (405, 6), (417, 5),
(406, 6), (417, 6), (407, 6),
(418, 6), (408, 6), (418, 5),
(409, 6), (419, 5), (410, 1),
(419, 6), (410, 4), (420, 6),
(411, 1), (420, 5), (411, 4),
(421, 5), (412, 3), (421, 6),
(412, 4), (422, 6), (412, 6),
(423, 6), (413, 6), (423, 5),
(414, 6), (424, 4), (414, 3),
(424, 3), (414, 4), (424, 6);

-- 8. Inserindo Equipamentos do Cidadão
INSERT INTO `Cidadao_Equipamento` (`id_cidadao`, `id_equipamento`) VALUES
(1111111, 6),
(1111111, 1);

-- 9. Criando Rotina de Treino
INSERT INTO `Rotina_Treino` (`id_rotina_treino`, `descricao`, `nivel`, `ID_Cidadao`, `data_criacao`)
VALUES (1, 'Treino A - Calistenia Força', 3, 1111111, NOW());

-- 10. Selecionando Exercícios (Seleciona)
INSERT INTO `Seleciona` (`id_seleciona`, `id_rotina_treino`, `id_exercicio`, `series`, `repeticoes_ou_tempo`, `ordem_execucao`) VALUES
(12345, 1, 104, 4, 10, 1),
(21454, 1, 206, 4, 6, 2),
(56234, 1, 302, 4, 15, 3),
(25363, 1, 407, 3, 45, 4);

SET FOREIGN_KEY_CHECKS = 1;
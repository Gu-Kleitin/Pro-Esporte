import { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import perguntas from '../../data/questionarioTreino';

import {
    salvarQuestionario,
    salvarTreino
} from '../../database/treinoRepository';

import api from '../../services/api';

const [indice, setIndice] = useState(0);

const [respostas, setRespostas] = useState({});
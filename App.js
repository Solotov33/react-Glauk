import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [img, setImg] = useState(require('./src/biscoito.jpg'));
  const [textoFrase, setTextoFrase] = useState('Testando a frase do app');

  const frases = [
    'A sorte favorece os corajosos.',
    'Você é mais forte do que imagina.',
    'Grandes mudanças começam com pequenos passos.',
    'Acredite: algo incrível está prestes a acontecer.',
    'Seu esforço será recompensado em breve.',
    'A paciência é a chave para grandes conquistas.',
    'Você está exatamente onde precisa estar.',
    'Não tenha medo de recomeçar. É uma chance de fazer melhor.',
    'O universo conspira a favor de quem não desiste.',
    'Seu sorriso é seu superpoder. Use-o mais.',
    'A resposta que você procura está dentro de você.',
    'Hoje é um ótimo dia para começar algo novo.',
    'Você é a razão do seu próprio sucesso.',
    'A vida é feita de ciclos. Abrace o próximo com coragem.',
    'A sorte não bate à porta — ela entra quando você abre.',
    'Você já venceu só por tentar.',
    'Confie no processo. Tudo tem seu tempo.',
    'Seja a energia que você quer atrair.',
    'A felicidade está nas pequenas coisas.',
    'Você é capaz de coisas extraordinárias.',
    'O Senhor é meu pastor, nada me faltará. — Salmos 23:1',
    'Tudo posso naquele que me fortalece. — Filipenses 4:13',
    'Entrega o teu caminho ao Senhor; confia nele, e ele o fará. — Salmos 37:5',
    'Porque eu bem sei os planos que tenho para vós. — Jeremias 29:11',
    'Alegrai-vos na esperança, sede pacientes na tribulação. — Romanos 12:12',
    'O choro pode durar uma noite, mas a alegria vem pela manhã. — Salmos 30:5',
    'Em tudo dai graças. — 1 Tessalonicenses 5:18',
    'O Senhor é a minha luz e a minha salvação. — Salmos 27:1',
    'Não temas, porque eu sou contigo. — Isaías 41:10',
    'Buscai primeiro o Reino de Deus. — Mateus 6:33',
    'Deus é amor. — 1 João 4:8',
    'Se Deus é por nós, quem será contra nós? — Romanos 8:31',
    'A fé é o firme fundamento das coisas que se esperam. — Hebreus 11:1',
    'Clama a mim, e responder-te-ei. — Jeremias 33:3',
    'O Senhor te guardará de todo mal. — Salmos 121:7',
    'Bem-aventurados os que choram, porque serão consolados. — Mateus 5:4',
    'O Senhor é bom, uma fortaleza no dia da angústia. — Naum 1:7',
    'Confia no Senhor de todo o teu coração. — Provérbios 3:5',
    'Aquietai-vos e sabei que eu sou Deus. — Salmos 46:10',
    'A graça do Senhor é suficiente para ti. — 2 Coríntios 12:9',
    '良藥苦口',
    '千里之行, 始于足下',
    '一圖勝似千言',
    '有煙就有火',
    '三個臭皮匠，賽過諸葛亮',
    '虎穴に入らずんば虎子を得ず',
    '猿も木から落ちる',
    '石の上にも三年',
    '行く者 は追わず、来る 者 は 拒まず'
  ];


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase('" ' + frases[numeroAleatorio] + ' "');
    setImg(require('./src/biscoitoQuebrado.jpg'))
  }

  function reiniciar() {
    setImg(require('./src/biscoito.jpg'))
    setTextoFrase('');
  }


  return (
    <View style={styles.container}>
      <Image 
      source={img}
      style={styles.img}
      />
    <View style={styles.textofrase2}>
    <Text style={styles.textofrase} >{textoFrase}</Text>
    </View>

    <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito } activeOpacity={0.6}>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto} >Quebrar biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={ reiniciar } activeOpacity={0.6}>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, { color: '#121212' }]} >Reiniciar biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    width: 230,
    height: 230,
    margin: 10

  },

  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    marginHorizontal: 30,
    marginVertical: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },



  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
   
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },

})


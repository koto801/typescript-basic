// 型エイリアスで引数の型を定義
type Student = {
  name: string;
  score: number;
};

// 関数に型注釈をつける（引数：Student型、戻り値：string型）
const getResultMessage = (student: Student): string => {
  if (student.score >= 60) {
    return `${student.name}さんは合格です。`;
  } else {
    return `${student.name}さんは不合格です。`;
  }
};

const studentA = {
  name: '侍太郎',
  score: 70,  // number型に修正（'70点'→70）
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);
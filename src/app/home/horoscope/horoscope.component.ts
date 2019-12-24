import { Component, OnInit,  Pipe, PipeTransform } from '@angular/core';
import { WeatherService} from '../weather/weather.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})


export class HoroscopeComponent implements OnInit {

  horoscopeData;
  today;
  constructor(private horoscopeService: WeatherService ) {
    // this.horoscopeService.getHoroscopeAPI().subscribe(response => {
    //   this.horoscopeData = response;
    //   });
      this.horoscopeData = {horoscope: {today: [ {
        content: 'パーティーに誘われたら、ぜひ参加して。初対面の人から、仕事にいい影響を与える話が聞けそう。買い物も楽しめます。',
        item: 'ウィッグ', money: 3, total: 4, job: 4, color: 'オレンジ', day: 11, love: 4, rank: 5, sign: '牡羊座'},
        {content: '好奇心が高まって、いろいろなことに関心を持てる日。昔からの知り合いに会いに行くと、さらにモチベーションがアップ♪',
        item: 'ストロベリージャム', money: 4, total: 5, job: 5, color: 'ホワイト', day: '', love: 5, rank: 2, sign: '牡牛座'},
        {content: '今日はワガママが許されない日。あなたが自己主張ばかりすると、周りも怒ってしまいそうです。まず人の話を聞いて。',
        item: '携帯電話の充電器', money: 1, total: 1, job: 2, color: 'ピンク', day: '', love: 2, rank: 12, sign: '双子座'},
        {content: '金運が絶好調。久しぶりに会った人から、臨時収入をもらえるかも。ショッピングに行くなら、新規オープンのお店がオススメ。',
        item: 'エッグタルト', money: 3, total: 3, job: 3, color: 'ゴールド', day: '', love: 3, rank: 8, sign: '蟹座'},
        {content: '長期戦だったケンカは、今日でひとまず仲直りできそうです。相手が折れるのを待つより、自分が折れるようにしてみて。',
        item: '靴べら', money: 2, total: 2, job: 2, color: 'レッド', day: '', love: 2, rank: 11, sign: '獅子座'},
        {content: '恋愛運が上昇中。片思い中の人は、気持ちを打ち明ける大チャンスです。クリスマスのムードを、うまく味方につけて。',
        item: 'カルボナーラ', money: 3, total: 3, job: 3, color: 'パープル', day: '', love: 4, rank: 7, sign: '乙女座'},
        {content: 'パワフルな運気の一日。障害を乗り越える方法が見つかりそうです。根拠がなくても、自分に自信を持って進みましょう♪',
        item: 'ポークカレー', money: 4, total: 4, job: 4, color: 'シルバー', day: '', love: 5, rank: 4, sign: '天秤座'},
        {content: '落ち込んでしまう出来事は、あなたの気分次第でどうにでもなります。夜は友達と一緒に、ディナーを楽しみましょう。',
        item: 'マルゲリータピザ', money: 3, total: 3, job: 4, color: 'グリーン', day: '', love: 4, rank: 6, sign: '蠍座'},
        {content: '金運がイマイチでも、他はなんとか回復モード。これまで悩んでいたことが変わってきて、新しいことに積極的になれそう。',
        item: 'ブイヨン', money: 2, total: 2, job: 2, color: 'ブラック', day: '', love: 3, rank: 10, sign: '射手座'},
        {content: '夜はのんびり過ごすのがGOOD。恋人との関係に、嬉しい進展がありそう。手料理などで、家庭的な一面をアピールして！',
        item: 'キャベツ', money: 5, total: 5, job: 5, color: 'グレー', day: '', love: 5, rank: 1, sign: '山羊座'},
        {content: '仲間とのイベントは、あなたが段取りを決めて。異性の目を意識したファッションや言葉遣いが、良い出会いを呼びます♪',
        item: 'きつねうどん', money: 4, total: 4, job: 5, color: 'ブルー', day: '', love: 5, rank: 3, sign: '水瓶座'},
        {content: '片思いの決着をつけようと、意気込むのはちょっと待って。今日は運気の低迷期。決して焦らず、友達との時間を大切に。',
        item: '味噌ラーメン', money: 2, total: 3, job: 3, color: 'イエロー', day: '', love: 3, rank: 9, sign: '魚座'}]}};
      console.log('this.horoscopeData');
      console.log(this.horoscopeData);
      this.today = this.horoscopeData.horoscope.today;
      console.log('this.today');
      console.log(this.today);
   }

  ngOnInit() {
  }
}

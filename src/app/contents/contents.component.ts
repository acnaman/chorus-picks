import { Component, OnInit, Input } from '@angular/core';

const tmpItems = [
  {
    title: 'テストタイトル１',
    content: '浜離宮朝日ホールにて開催予定だったXXXX公演が中止になりました。'
  },
  {
    title: 'テストタイトル２',
    content: '情報誌「合唱ニュース」が発刊されました。ご希望の方はお近くの都連理事まで。'
  },
  {
    title: '正しい発声法',
    content: '人気コラム「正しい発声法」。今回は声楽家のXXXXさんにお越しいただき、呼吸の仕方をレクチャーしていただきます。'
  },
];

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  @Input() tag: string;
  items = [];
  constructor() { }

  ngOnInit() {
    this.items = tmpItems;
  }

}

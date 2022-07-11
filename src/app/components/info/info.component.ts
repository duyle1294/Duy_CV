import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <div class="grid">
      <div class="box" *ngFor="let data of datas">
        <h2>{{ data.title }}</h2>
        <div class="contain">
          <p *ngFor="let item of data.content">{{ item }}</p>
        </div>
      </div>
    </div>
  `,
  // templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  datas = [
    {
      title: '個人情報',
      content: [
        '08/12/1994',
        'lequangduy1294@ gmail.com',
        '0905574087',
        '29/176 Phan Chu Trinh- Hue',
      ],
    },
    {
      title: 'キャリア目標',
      content: [
        '自分の経験と知識を尽くして 仕事をうまくやり遂げる環境 で働きたいです。',
        'IT知識が学べ、実戦できる 場所を願望しております。',
      ],
    },
    {
      title: '得意',
      content: [
        '日本語や英語が 翻訳できること。',
        'ロゴマーク、チラシ、 イラスト、カタログ等が 製作できること。',
        '新しい分野が 早く習得できること。',
      ],
    },
    {
      title: '趣味',
      content: ['音楽を聴きながら川揃いに散歩', 'アニメ、漫画、小説'],
    },
  ];
}

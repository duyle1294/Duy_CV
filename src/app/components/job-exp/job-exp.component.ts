import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-exp',
  template: `
    <div class="box" *ngFor="let data of datas">
      <h3>{{ data.title }}</h3>
      <div class="content" *ngFor="let content of data.contents">
        <h4>{{content.date}}</h4>
        <h6>{{content.subtitle}}</h6>
        <p *ngFor="let item of content.text">{{item}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./job-exp.component.css'],
})
export class JobExpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  datas = [
    {
      title: '免許・資格',
      contents: [
        {
          date: '🗓 2018年07月',
          subtitle: '',
          text: [`The Bachelor's of Englishー英語の学士号`],
        },
        {
          date: '🗓 2020年07月',
          subtitle: '',
          text: [`N2JPLTー日本語能力試験2級　点数：108`],
        },
        {
          date: '🗓 2021年12月',
          subtitle: '',
          text: [`N1JPLTー日本語能力試験1級　点数：117`],
        },
        {
          date: '🗓 2022年07月',
          subtitle: '',
          text: [`N1JPLTー日本語能力試験1級　点数：●●●`],
        },
        // {
        //   date: '🗓 2022年07月',
        //   subtitle: '',
        //   text: [`ABMセンター フォロンドエンド認定書`],
        // },
      ],
    },
    {
      title: '職 歴',
      contents: [
        {
          date: '🗓 2019年1月 > 2021年1月',
          subtitle: '🏢 DMI HUE CO、LTD。',
          text: [`役職:リーダー`,
          '仕事内容: 日本のスーパーチラシ作成',
          'お客様とコミュニケーション',
          '日本から支持を頂いて、チームに分担する',
          '制作できたデータチェック、教育担当'
        ],
        },
        {
          date: '🗓 2021年1月 > 2022年3月',
          subtitle: '🏢 VACS HUE CO、LTD。',
          text: [`役職:テクニカル班長`,
          '仕事内容: 建築に関する資料制作（提案書、図版、図面、イラスト等）。',
          'お客様とコミュニケーション',
          '日本から支持を頂いて制作する、教育担当'
        ],
        },
        {
          date: '🗓 2022年4月 > 現在',
          subtitle: '🏢 JAVIS ENTERPRISE CO、LTD。',
          text: [`役職:PM`,
          '仕事内容: 案件管理、デザイン、FE',
          'お客様とコミュニケーション',
          'スペック書く,プラン提出、エンジニアに指示出す',
          'ドラフトデザイン提出、UI提出',
          '実装できた機能チェック、UIチェック'
        ],
        },
      ],
    },
  ];
}

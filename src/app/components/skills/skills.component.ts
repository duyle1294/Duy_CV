import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
      <div class="box" *ngFor="let data of datas">
      <h3>{{ data.title }}</h3>
      <div class="content" *ngFor="let content of data.contents">
        <div class="label">
          <h6>{{content.subtitle}}</h6>
          <p>{{content.value}}%</p>
        </div>
        <div class="bar">
          <input class="slider" type="range" min="0" max="100" value="{{content.value}}">
          <div class="progress" #value style="width: {{content.value}}%;"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datas = [
    {
      title: '日本語',
      contents: [
        {
          subtitle: '聴取',
          value: `80`,
        },
        {
          subtitle: '読取',
          value: `90`,
        },
        {
          subtitle: '会話',
          value: `70`,
        },
        {
          subtitle: '文法',
          value: `85`,
        },
      ],
    },
    {
      title: '英語',
      contents: [
        {
          subtitle: '聴取',
          value: `60`,
        },
        {
          subtitle: '読取',
          value: `60`,
        },
        {
          subtitle: '会話',
          value: `10`,
        },
        {
          subtitle: '文法',
          value: `40`,
        },
      ],
    },
    {
      title: 'フロントエンド',
      contents: [
        {
          subtitle: 'HTML',
          value: `77`,
        },
        {
          subtitle: 'CSS',
          value: `72`,
        },
        {
          subtitle: 'Java Script',
          value: `33`,
        },
        {
          subtitle: 'Figma',
          value: `33`,
        },
      ],
    },
    {
      title: 'グラフィックデザインソフト',
      contents: [
        {
          subtitle: 'Illustrator',
          value: `90`,
        },
        {
          subtitle: 'Photoshop',
          value: `42`,
        },
        {
          subtitle: 'Indesign',
          value: `42`,
        }
      ],
    },
  ];

}

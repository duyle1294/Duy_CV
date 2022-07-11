import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `<div class="image">
      <span></span>
    </div>
    <div class="name">
      <h2>{{ name.japan }}</h2>
      <h1>{{ name.eng }}</h1>
    </div> `,
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  link =
    'https://yt3.ggpht.com/ytc/AKedOLRAIbph_gdGzZ9tOuxxzrWJYHGXFLbBXDUVz6HE2w=s900-c-k-c0x00ffffff-no-rj';
  name = {
    japan: 'レー・クァン・ズイ',
    eng: 'Le Quang Duy',
  };
}

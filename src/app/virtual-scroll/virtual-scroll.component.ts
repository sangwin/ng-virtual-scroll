/* Created By : Sangwin Gawande (https://sangw.in) */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  listItems = Array.from({ length: 220000 }).map((_, i) => `The Great Idea #${i}`);

  constructor() { }

  ngOnInit(): void { }

}
/* Created By : Sangwin Gawande (https://sangw.in) */
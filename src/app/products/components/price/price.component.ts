import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-page',
  templateUrl: './price.component.html',
  styles: [
  ]
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  public interval$?: Subscription;

  @Input()
  public price: number = 0;

  ngOnInit(): void {
    console.log('Componete HIJO: ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('Componete HIJO: ngOnChanges');

  }
  ngOnDestroy(): void {
    console.log('Componete HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }


}

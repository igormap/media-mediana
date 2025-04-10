import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'th[app-th]',
  standalone: true,
})
export class AppThDirective {
  @Input() center = false;
  @Input() first = false;
  @Input() last = false;

  @HostBinding('class')
  get classes(): string {
    return [
      'px-4',
      'py-6',
      'text-base',
      'font-bold',
      'text-[#18203A]',
      this.center || this.first || this.last ? 'text-center' : '',
    ].join(' ');
  }
}

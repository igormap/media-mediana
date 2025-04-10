import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'td[app-td]',
  standalone: true,
})
export class AppTdDirective {
  @Input() center = false;
  @Input() faded = false;

  @HostBinding('class')
  get classes(): string {
    return [
      'px-4',
      'py-3',
      'font-medium',
      'text-sm',
      this.faded ? 'text-[#222B45]/50' : 'text-[#222B45]',
      this.center ? 'text-center' : '',
    ].join(' ');
  }
}

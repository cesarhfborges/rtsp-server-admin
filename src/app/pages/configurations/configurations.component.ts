import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {

  transportOptions: { value: string, label: string }[] = [
    { value: 'tcp', label: 'TCP' },
    { value: 'udp', label: 'UDP' },
  ]

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      transport: ['', [Validators.required]],
      rtspParams: this.fb.array([]),
      encodeParams: this.fb.array([]),
      killFFmpegOnRestart: [false, [Validators.required]],
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.addRtspParams({key: `key${i}`, value: `value${i}`, active: true});
    }
  }

  get rtspParamsArray(): Array<any> {
    return this.form.get('rtspParams')?.value as Array<any>;
  }

  get rtspParams(): FormArray {
    return this.form.get('rtspParams') as FormArray;
  }

  get encodeParams(): FormArray {
    return this.form.get('encodeParams') as FormArray;
  }

  createGroupRtspParams(): FormGroup {
    return this.fb.group({
      key: ['', [Validators.required]],
      value: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  createGroupEncodeParams(): FormGroup {
    return this.fb.group({
      key: ['', [Validators.required]],
      value: ['', [Validators.required]],
      active: [true, [Validators.required]],
    });
  }

  addRtspParams(dados?: any): void {
    const group = this.createGroupRtspParams();
    if (dados) {
      group.patchValue(dados);
    }
    this.rtspParams.push(group);
  }

  addEncodeParams(): void {
    const group = this.createGroupEncodeParams();
    this.encodeParams.push(group);
  }
}

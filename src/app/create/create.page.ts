import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  classroomForm: FormGroup;
  students: FormArray;

  constructor(public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.classroomForm = this.formBuilder.group({
        'class_name' : [null, Validators.required],
        'students' : this.formBuilder.array([])
      });
    }

  ngOnInit() {
  }

  get studentData() {
    return <FormArray>this.classroomForm.get('students');
  }

  addBlankStudent(): void {
    this.students = this.classroomForm.get('students') as FormArray;
    this.students.push(this.createStudent());
  }

  deleteStudent(control, index) {
    control.removeAt(index)
  }

  createStudent(): FormGroup {
    return this.formBuilder.group({
      student_name: ''
    });
  }

  async saveClassroom(){
    await this.api.postClassroom(this.classroomForm.value)
    .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/detail/'+id]);
      }, (err) => {
        console.log(err);
      });
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  faculties: string[] = ['Faculty A', 'Faculty B', 'Faculty C']; // Sample list of faculties
  eventName: string = '';
  taskId: string = '';
  eventDate: string = '';
  facultyInCharge: string = '';

  checkAvailability() {
    // Implementation for checking availability
    // This method will be triggered when the form is submitted
    // You can access form values using ngForm
    console.log("Checking availability...");
    console.log("Event Name: " + this.eventName);
    console.log("Task ID: " + this.taskId);
    console.log("Event Date: " + this.eventDate);
    console.log("Faculty In Charge: " + this.facultyInCharge);
    // Additional logic for availability check can be added here
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-training-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-app.component.html',
  styleUrl: './training-app.component.css'
})
export class TrainingAppComponent {
  services = [
    {
      title: 'Trainings',
      description: 'Highlight your training offerings against global management standards, regulatory standards, and process and productivity improvement tools.',
      details: [
        'Detailed course descriptions for each training program',
        'Learning objectives and outcomes',
        'Certification details (if applicable)',
        'Training methodologies (e.g., classroom, online, hands-on workshops)',
        'Customization options for different industries or company sizes',
        'Trainer profiles and their expertise',
        'Upcoming training schedule and registration information',
        'Testimonials from past training participants'
      ]
    },
    {
      title: 'Quality Support',
      description: 'Expand on the range of quality support services you offer.',
      details: [
        'Quality management system implementation and maintenance',
        'Internal audit support and training',
        'Document control and management',
        'Corrective and preventive action (CAPA) system development',
        'Supplier quality management',
        'Quality metrics development and monitoring',
        'Root cause analysis and problem-solving methodologies',
        'Quality culture development programs'
      ]
    },
    {
      title: 'Regulatory Support',
      description: 'Detail the regulatory support activities you provide.',
      details: [
        'Regulatory compliance assessments',
        'Gap analysis against relevant regulations',
        'Development of regulatory strategies',
        'Assistance with regulatory submissions and approvals',
        'Regulatory intelligence and updates',
        'Training on regulatory requirements',
        'Liaison with regulatory authorities',
        'Post-market surveillance and reporting',
        'Change management in regulated environments'
      ]
    },
    {
      title: 'Improvement Projects',
      description: 'Elaborate on your approach to improvement projects.',
      details: [
        'Project scoping and goal-setting methodologies',
        'Measurement and data analysis techniques',
        'Leadership engagement strategies',
        'Team building and change management approaches',
        'Continuous improvement methodologies',
        'Project management tools and techniques',
        'ROI calculation for improvement initiatives',
        'Case studies of successful improvement projects',
        'Sustainability planning for long-term improvements'
      ]
    }
  ];

}

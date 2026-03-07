// main.js
import './components/resource-header.js';
import './components/resource-filters.js';
import './components/resource-results.js';
import './components/resource-details.js';

// Sample data for resources
const resultData = [
  {
    id: 'tutoring',
    title: 'Peer Tutoring Centre',
    category: 'Academic',
    summary: 'Drop-in tutoring and study support.',
    location: 'Building W, Room W101',
    hours: 'Mon-Thu 10:00-16:00',
    contact: 'tutoring@nait.ca',
    virtual: false,
    openNow: true,
  },
  {
    id: 'counselling',
    title: 'Counselling Services',
    category: 'Wellness',
    summary: 'Confidential mental health supports.',
    location: 'Virtual and in-person',
    hours: 'Mon-Fri 09:00-17:00',
    contact: 'wellness@nait.ca',
    virtual: true,
    openNow: true,
  },
  {
    id: 'bursaries',
    title: 'Student Awards and Bursaries',
    category: 'Financial',
    summary: 'Funding options and application help.',
    location: 'Student Services, Main Floor CAT',
    hours: 'Mon-Fri 10:00-15:00',
    contact: 'awards@nait.ca',
    virtual: true,
    openNow: false,
  },
  {
    id: 'it',
    title: 'IT Service Desk',
    category: 'Tech',
    summary: 'Account access, Wi-Fi, MFA resets.',
    location: 'Library',
    hours: 'Mon-Fri 08:30-16:30',
    contact: 'it@nait.ca',
    virtual: false,
    openNow: true,
  },
  {
    id: 'recreation',
    title: 'Recreation Services',
    category: 'Wellness',
    summary: 'Fitness and recreational activities.',
    location: 'Gymnasium, Main Campus',
    hours: 'Mon-Sun 08:00-20:00',
    contact: 'recreation@nait.ca',
    virtual: false,
    openNow: true,
  },
  {
    id: 'clubs',
    title: 'Student Clubs and Organizations',
    category: 'Social',
    summary: 'Join clubs to meet peers and network.',
    location: 'Student Lounge',
    hours: 'Mon-Fri 09:00-17:00',
    contact: 'clubs@nait.ca',
    virtual: false,
    openNow: false,
  },
  {
    id: 'career',
    title: 'Career Services',
    category: 'Professional',
    summary: 'Job search help and career counseling.',
    location: 'Career Centre',
    hours: 'Mon-Fri 10:00-16:00',
    contact: 'career@nait.ca',
    virtual: true,
    openNow: true,
  },
  {
    id: 'library',
    title: 'Library Services',
    category: 'Academic',
    summary: 'Research help and study spaces.',
    location: 'Library Building',
    hours: 'Mon-Sat 09:00-18:00',
    contact: 'library@nait.ca',
    virtual: true,
    openNow: false,
  },
  {
    id: 'health',
    title: 'Health Services',
    category: 'Wellness',
    summary: 'On-campus medical support.',
    location: 'Health Centre, Main Campus',
    hours: 'Mon-Fri 09:00-17:00',
    contact: 'health@nait.ca',
    virtual: false,
    openNow: true,
  },
];

// TODO: Pass data to resource-results component
const resultsComponent = document.querySelector('resource-results');
resultsComponent.results = resultData;

// TODO: Listen for resourceSelected event and update resource-details component FINISHED
const detailsComponent = document.querySelector('resource-details');

resultsComponent.addEventListener('resource-selected', function (event) {
  detailsComponent.resource = event.detail.resource;
});

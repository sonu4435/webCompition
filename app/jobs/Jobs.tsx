"use client";

import { useState } from "react";
import { Menu, Search, Bell } from "lucide-react";

export default function Jobs() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [resumeUploaded, setResumeUploaded] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    // Simulated job recommendations with full details
    const jobRecommendations = [
        {
            title: "Software Engineer",
            company: "Google",
            location: "Mountain View, CA",
            salary: "$120,000 - $150,000",
            description: "Develop and maintain cutting-edge web applications using modern frameworks.",
            skillsRequired: ["JavaScript", "React", "Node.js"],
            applyLink: "https://careers.google.com/",
        },
        {
            title: "Data Scientist",
            company: "Amazon",
            location: "Seattle, WA",
            salary: "$130,000 - $160,000",
            description: "Leverage data analytics and machine learning to enhance customer experiences.",
            skillsRequired: ["Python", "Machine Learning", "AWS"],
            applyLink: "https://www.amazon.jobs/",
        },
        {
            title: "Full Stack Developer",
            company: "Microsoft",
            location: "Redmond, WA",
            salary: "$110,000 - $140,000",
            description: "Build scalable web applications and APIs using cloud-based technologies.",
            skillsRequired: ["JavaScript", "React", "SQL"],
            applyLink: "https://careers.microsoft.com/",
        },
    ];

    const handleFileUpload = (event: any) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setResumeFile(file);
            setResumeUploaded(true);
        } else {
            alert("Please upload a valid PDF file.");
        }
    };

    return (
        <div className="h-screen overflow-y-auto bg-gray-50">
            {/* Main Content */}
            <div className={`${isSidebarOpen ? "ml-10" : ""} transition-margin duration-300`}>
                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between px-4 py-3">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
                            <Menu className="w-6 h-6 text-gray-600" />
                        </button>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <button className="p-2 rounded-lg hover:bg-gray-100">
                                <Bell className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Job Recommendations Section */}
                <div className="mt-8 mx-auto max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recommended Jobs</h2>
                    <div className="grid gap-6">
                        {jobRecommendations.map((job, index) => (
                            <div key={index} className="p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
                                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                                <p className="text-gray-600 text-sm mb-1">{job.company} - {job.location}</p>
                                <p className="text-gray-500 text-sm font-medium mb-1">Salary: {job.salary}</p>
                                <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                                <p className="text-gray-500 text-sm">Required Skills: <span className="font-semibold">{job.skillsRequired.join(", ")}</span></p>
                                <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

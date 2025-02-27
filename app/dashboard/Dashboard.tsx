"use client"

import { useState } from "react"
import {
    Bell,
    Home,
    Menu,
    Search,
    ShoppingBag,
    UploadCloud,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const [resumeUploaded, setResumeUploaded] = useState(false)
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const router = useRouter();
    // Simulated job recommendations
    const jobRecommendations = [
        {
            title: "Software Engineer",
            company: "Google",
            location: "Mountain View, CA",
            skillsRequired: ["JavaScript", "React", "Node.js"],
        },
        {
            title: "Data Scientist",
            company: "Amazon",
            location: "Seattle, WA",
            skillsRequired: ["Python", "Machine Learning", "AWS"],
        },
        {
            title: "Full Stack Developer",
            company: "Microsoft",
            location: "Redmond, WA",
            skillsRequired: ["JavaScript", "React", "SQL"],
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
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-screen w-64 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } bg-white border-r border-gray-200`}
            >
                <div className="h-full flex flex-col">
                    <Link href="/" className="text-xl font-semibold text-primary ml-5 mt-5">
                        Learn<span className="text-black">ify</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex-1 px-3 py-4 space-y-1">
                        <div className="mb-4">
                            <p className="px-3 text-xs font-semibold text-gray-400 uppercase">PAGES</p>
                            <div className="mt-2 space-y-1">
                                <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-purple-50 text-purple-600">
                                    <Home className="w-5 h-5 mr-3" />
                                    Dashboard
                                </Link>
                                <Link href="/jobs" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
                                    <ShoppingBag className="w-5 h-5 mr-3" />
                                    Jobs
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>

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
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                            <button className="p-2 rounded-lg hover:bg-gray-100">
                                <Bell className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Resume Submission Section */}
                <div className="min-h-screen bg-gray-50">
                    <div className={`${isSidebarOpen ? "ml-64" : ""} transition-margin duration-300 p-6`}>
                        <h2 className="text-xl font-semibold mb-4">Resume Submission</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Form Section */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); router.push("/jobs"); }}>
                                    <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required />
                                    <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required />
                                    <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required />
                                    <input type="text" placeholder="LinkedIn Profile" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required />
                                    <input type="text" placeholder="GitHub Profile" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required />
                                    <textarea placeholder="Skills" className="w-full px-4 py-2 border rounded-lg" disabled={resumeUploaded} required></textarea>
                                    <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg">Submit</button>
                                </form>
                            </div>
                            {/* Upload Section */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center">
                                <h3 className="text-lg font-semibold mb-4">Upload Resume (PDF Only)</h3>
                                <input type="file" accept="application/pdf" className="hidden" id="resumeUpload" onChange={handleFileUpload} />
                                <label htmlFor="resumeUpload" className="cursor-pointer bg-gray-100 p-4 rounded-lg border border-dashed flex flex-col items-center">
                                    <UploadCloud className="w-10 h-10 text-gray-500 mb-2" />
                                    <span className="text-gray-600">{resumeFile ? resumeFile.name : "Click to upload"}</span>
                                </label>
                                {resumeUploaded && <p className="text-green-600 mt-2">Resume uploaded successfully!</p>}
                            </div>
                        </div>

                        {/* Job Recommendations Section - Hidden Until Resume is Uploaded */}
                        {resumeUploaded && (
                            <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
                                <div className="grid gap-4">
                                    {jobRecommendations.map((job, index) => (
                                        <div key={index} className="p-4 border rounded-lg shadow-sm">
                                            <h3 className="text-lg font-semibold">{job.title}</h3>
                                            <p className="text-gray-600">{job.company} - {job.location}</p>
                                            <p className="text-gray-500 text-sm">Required Skills: {job.skillsRequired.join(", ")}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

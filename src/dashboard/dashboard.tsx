 import React from "react";

 import Logo from "../assets/timelyimage.jpg"
 import Image from "../assets/IMG-20230710-WA0036.jpg"

                const Dashboard: React.FC = () => {
                    const timeSlots: string[] = [
                        "8:00-9:30am",
                        "9:30-10:30am",
                        "10:30-11:30am",
                        "11:30-12:30am",
                        "9:30-10:30am",
                        "9:30-10:30am",
                    ];
                    const days: string[] = [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ];
                    return (
                        <div className="flex min-h-screen bg-gray-50">
                            {/* Sidebar */}
                            <aside className="w-64 bg-white border-r flex flex-col py-6 px-4" >
                                <div className="flex items-center mb-8">
                                    <img src={Logo} alt="Logo" className="w-[auto] h-20 object-fill" />
                                    {/* <span className="font-bold text-green-700 text-lg">TIMELY HUB</span> */}
                                </div>
                                <nav className="flex-1">
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-green-700 font-semibold bg-green-100 rounded-lg px-3 py-2">
                                            <span className="material-icons mr-2">schedule</span>
                                            My Schedule
                                        </li>
                                        <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                                            <span className="material-icons mr-2">chat</span>
                                            AI Chat
                                            <span className="ml-auto bg-red-500 text-white rounded-full px-2 text-xs">4</span>
                                        </li>
                                        <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                                            <span className="material-icons mr-2">cloud_upload</span>
                                            Uploads / Reminder
                                        </li>
                                        <li className="flex items-center text-gray-600 hover:text-green-700 px-3 py-2 cursor-pointer">
                                            <span className="material-icons mr-2">quiz</span>
                                            Start Quiz
                                            <span className="ml-auto bg-green-100 text-green-700 rounded px-2 text-xs">Pro</span>
                                        </li>
                                    </ul>
                                </nav>
                            </aside>

                            {/* Main Content */}
                            <main className="flex-1 flex flex-col px-8 py-6">
                                {/* Search Bar */}
                                <div className="flex items-center mb-6">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full max-w-xl px-4 py-2 rounded-full bg-gray-100 border focus:outline-none"
                                    />
                                </div>

                                <div className="flex gap-8">
                                    {/* Schedule Table */}
                                    <section className="flex-1">
                                        <div className="flex items-center mb-4">
                                            <h2 className="text-xl font-semibold mr-2">My Schedule</h2>
                                            <button className="bg-gray-100 rounded-full p-1 mx-1">
                                                <span className="material-icons text-gray-500">chevron_left</span>
                                            </button>
                                            <button className="bg-gray-100 rounded-full p-1 mx-1">
                                                <span className="material-icons text-gray-500">chevron_right</span>
                                            </button>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full border border-green-700 rounded-lg">
                                                <thead>
                                                    <tr className="bg-green-700 text-white">
                                                        <th className="px-4 py-2 text-left">Day/Time</th>
                                                        {timeSlots.map((slot: string, idx: number) => (
                                                            <th key={idx} className="px-4 py-2 text-center">{slot}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {days.map((day: string, ) => (
                                                        <tr key={day} className="border-t">
                                                            <td className="px-4 py-2 font-medium text-green-700 bg-green-100">{day}</td>
                                                            {timeSlots.map((_: string, i: number) => (
                                                                <td key={i} className="px-4 py-2 border-l"></td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex gap-4 mt-6">
                                            <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">New sheet</button>
                                            <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">Set reminder</button>
                                        </div>
                                    </section>

                                    {/* Right Sidebar */}
                                    <div className="w-80">
                                        {/* User Info */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src={Image} alt="" className=" w-12 h-12 rounded-full flex items-center justify-center" />
                                            <div>
                                                <div className="font-semibold text-gray-800">Jone Copper</div>
                                                <div className="text-xs text-gray-500">UI Designer</div>
                                            </div>
                                        </div>
                                        {/* Calendar */}
                                        <div className="bg-white rounded-lg p-4 shadow mb-4">
                                            <div className="text-sm text-gray-500 mb-2">February 2021</div>
                                            <table className="w-full text-center text-xs">
                                                <thead>
                                                    <tr>
                                                        {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d: string) => (
                                                            <th key={d} className="py-1 text-gray-400">{d}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Calendar rows, simplified for static view */}
                                                    <tr>
                                                        <td></td><td></td><td></td><td></td><td></td><td className="text-gray-700">1</td><td className="text-gray-700">2</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-gray-700">3</td><td className="text-gray-700">4</td><td className="text-gray-700">5</td><td className="text-gray-700">6</td><td className="text-gray-700">7</td><td className="text-gray-700">8</td><td className="text-gray-700">9</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-gray-700">10</td><td className="text-gray-700">11</td><td className="text-gray-700">12</td><td className="text-gray-700">13</td><td className="text-gray-700">14</td><td className="text-gray-700">15</td><td className="text-gray-700">16</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-gray-700">17</td><td className="text-gray-700">18</td><td className="text-gray-700">19</td><td className="text-gray-700">20</td><td className="text-gray-700">21</td><td className="text-gray-700">22</td><td className="bg-green-100 text-green-700 rounded-full">23</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-gray-700">24</td><td className="text-gray-700">25</td><td className="text-gray-700">26</td><td className="bg-green-100 text-green-700 rounded-full">27</td><td className="text-gray-700">28</td><td></td><td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Upcoming Events */}
                                        <div>
                                            <div className="font-semibold text-gray-700 mb-2">Upcoming Events</div>
                                            <div className="space-y-3">
                                                <div className="flex items-center bg-yellow-100 rounded-lg p-2">
                                                    <span className="material-icons text-yellow-500 mr-2">edit</span>
                                                    <div>
                                                        <div className="text-sm font-medium">Typography in UX/UI</div>
                                                        <div className="text-xs text-gray-500">Design &nbsp; 10:00am</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-pink-100 rounded-lg p-2">
                                                    <span className="material-icons text-pink-500 mr-2">palette</span>
                                                    <div>
                                                        <div className="text-sm font-medium">Figma UI UX Design</div>
                                                        <div className="text-xs text-gray-500">Design &nbsp; 10:00am</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    );
};

 export default Dashboard;



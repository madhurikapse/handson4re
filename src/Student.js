import React from 'react'
import Nav from './Nav'
import "./Component.css"
const Student = () => {
  return (
    <div>
        <Nav/>
        <div className='details'>
        <button>Add New Student</button>
        <h1>Students Details</h1>
        </div>
        <div className='table'>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>kalyani</td>
                        <td>25</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Biden</td>
                        <td>26</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>ashu</td>
                        <td>22</td>
                        <td>Mern</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>nohami</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>madhuri</td>
                        <td>23</td>
                        <td>Mern</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>reshma</td>
                        <td>24</td>
                        <td>Mern</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student

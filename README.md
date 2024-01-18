legalite

Overview

The legality program is a Django-based application designed to analyze and evaluate Terms of Service (TOS) agreements. It provides users with a comprehensive assessment of the legitimacy of TOS agreements, assigning them a score and color-coding (red, green, or yellow) based on their level of clarity.

Features

Legitimacy Scoring: The program employs an algorithm to evaluate the legitimacy of TOS agreements. The resulting score determines the color-coded rating (red, green, or yellow) displayed to users.
User Contributions: Registered users can contribute to the platform by submitting new TOS agreements. Each submission undergoes a legitimacy assessment and is added to the database.
Comparison Tool: Users can compare multiple TOS agreements to identify differences and similarities, aiding in decision-making.
User Profiles: Registered users have access to a profile page where they can view and edit their information. The profile also displays TOS agreements and edits contributed by the user.
Community Ranking: Users can provide community rankings for TOS agreements, contributing to the overall legitimacy score.

![Main](images/legalite.png)
![Main](images/legalite2.png)
![Main](images/legalite3.png)
![Main](images/legalite4.png)

Prerequisites:
Python:
Ensure that Python is installed on your machine. If not, download and install Python from python.org.
Git:
Install Git on your machine from git-scm.com.
Steps:
Clone the Repository:
Open a terminal or command prompt.
Run the following command to clone the repository:
bash
Copy code
git clone https://github.com/your-username/your-repository.git
Replace your-username and your-repository with your GitHub username and the repository name.
Navigate to the Project Directory:
Change into the project directory:
bash
Copy code
cd your-repository
Create a Virtual Environment:
Create a virtual environment to isolate project dependencies:
bash
Copy code
python -m venv venv
Activate the virtual environment:
On Windows:
bash
Copy code
.\venv\Scripts\activate
On macOS/Linux:
bash
Copy code
source venv/bin/activate
Install Dependencies:
Install the project dependencies using pip:
bash
Copy code
pip install -r requirements.txt
Apply Migrations:
Apply the initial database migrations:
bash
Copy code
python manage.py migrate
Create a Superuser (Optional):
Create an admin superuser to access the Django admin interface:
bash
Copy code
python manage.py createsuperuser
Follow the prompts to set up an admin account.
Run the Development Server:
Start the Django development server:
bash
Copy code
python manage.py runserver
The server will run by default on http://127.0.0.1:8000/.

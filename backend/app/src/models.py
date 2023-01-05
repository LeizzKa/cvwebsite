from server import db
from skills import *
from experience import *

class personalData(db.Model): 
   name = db.Column(db.String(80), primary_key=True, unique=True, nullable=False)
   contact_info = db.Column(db.String(80), unique=True, nullable=True)
   skills = db.Column(db.Text, nullable=True)
   experience = db.Column(db.Text, nullable=True)

   def __repr__(self):
      return '<personalData %r>' % self.name
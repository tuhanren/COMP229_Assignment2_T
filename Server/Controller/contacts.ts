import express, {Request, Response, NextFunction} from 'express';

import Contact from '../Models/contact';

// Display Functions
//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
      Contact.find(function(err, contactsCollection)
	{
		if(err)
		{
			console.error(err);
			res.end(err);
		}
		
		res.render('index', { title: 'Contacts List', page: 'contacts-list', contactlist: contactsCollection });
	});
}
// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void 
{
      let id = req.params.id;
      //pass the id to the database
      Contact.findById(id, {}, {}, (err, contactsItemToEdit) => {
            if(err)
            {
                  console.error(err);
                  res.end(err);
            }
            //show the edit view
            res.render('index', { title: 'Edit', page: 'update', item: contactsItemToEdit});
      });
}
// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
      //show the edit view
      res.render('index', {title: 'Add', page: 'update', item: ''});
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
    // instantiate a new Contact Item
    let updatedContactItem = new Contact
    ({
          "_id": id,
          "FullName": req.body.FullName,
          "EmailAddress": req.body.EmailAddress,
          "ContactNumber": req.body.ContactNumber
    });
    //find the contact item via db.contactlist.update({"_id": id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) => {
          if(err)
          {
            console.error(err);
            res.end(err);
          }
          res.redirect('/contacts-list');
    });
}
// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
      // instantiate a new Contact Item
      let newContactItem = new Contact
      ({
            "FullName": req.body.FullName,
            "EmailAddress": req.body.EmailAddress,
            "ContactNumber": req.body.ContactNumber
      });

      // db.contactlist.insert({contact data here...})
      Contact.create(newContactItem, (err) => {
            if(err)
            {
              console.error(err);
              res.end(err);
            }
            res.redirect('/contacts-list');
      });
}
// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
      let id = req.params.id;
      // db.contactlist.remove({"_id": id})
      Contact.remove({_id: id}, (err) => {
            if(err)
            {
              console.error(err);
              res.end(err);
            }
            res.redirect('/contacts-list');
      });
}
# Pizzeria
credits to brian design once again. i added some form functionality, icons etc. incorporating formik, yup, chakra


the main challenge is designing the layout of the page, and to make it responsive. as for the form, i added some simple logic and validation schema
the submit is disabled using !formik.isDirty && formik.isValid. meaning that the button will be disabled as long as the user hasn't touched every field, and the value is invalid.

having trouble inlining the button text and the icon. but the problem is solved using inline grid, justify content, and align items. finally, add the grid gap to make some space
between button text and the icon

images src = unsplash, undraw

import { useFormik } from "formik";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';

function Addpizza(){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            image:'',
            name:'',
            price:'',
            description:'',
            custom:''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string().required('Name is required'),
            price: Yup.number().min(10, 'Price must be greater than 10').required('Price is required'),
            custom: Yup.string().required('Way of customize is required'),
        }), 
        onSubmit: (values, {setSubmitting, resetForm, setStatus})=>{
            axios.post('http://localhost:5500/pizzas', values)
            .then(response=>{
                setStatus('Success');
                resetForm();
                navigate('/pizzas');
            })
            .catch(error =>{
                setStatus('Error');
            })
            .finally(()=>{
                setSubmitting(false);
            });
        },
    });

    return(
        <div className="container mt-4">
            <h2 className="text-center">Add New Pizza</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                    id="image"
                    name="image"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}/>
                    {
                        formik.touched.image && formik.errors.image ?(
                            <div className="text-danger">{formik.errors.image}</div>
                        ): null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.name}/>
                    {
                        formik.touched.name && formik.errors.name ?(
                            <div className="text-danger">{formik.errors.name}</div>
                        ): null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                    id="price"
                    name="price"
                    type="number"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.price}/>
                    {
                        formik.touched.price && formik.errors.price ?(
                            <div className="text-danger">{formik.errors.price}</div>
                        ): null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                    id="description"
                    name="description"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.description}/>
                    {
                        formik.touched.description && formik.errors.description ?(
                            <div className="text-danger">{formik.errors.description}</div>
                        ): null
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="custom" className="form-label">Customizable</label>
                    <input
                    id="custom"
                    name="custom"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.custom}/>
                    {
                        formik.touched.custom && formik.errors.custom ?(
                            <div className="text-danger">{formik.errors.custom}</div>
                        ): null
                    }
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button></div>
            </form>
        </div>
    )
}

export default Addpizza;
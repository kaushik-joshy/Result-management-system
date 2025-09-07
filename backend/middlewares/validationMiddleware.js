const validateStudentInput = (req, res, next) => {
    const { name, dob, email, className, password } = req.body;

    if (!name || !dob || !email || !className || !password) {
        return res.status(400).json({
            success: false,
            message: 'Missing required student fields'
        });
    }

    next();
};

export { validateStudentInput };

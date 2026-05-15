function ErrorMessage({ message }) {
    return (
        <div className="mt-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-xl text-red-700 dark:text-red-200 text-center">
            ⚠ {message}
        </div>
    );
}

export default ErrorMessage;
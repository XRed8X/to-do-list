
dotenv.config()

mongoose.connect(procees.env.url)
.then(() => console.log('MongoDB Connected...'))
.catch((error) => console.error(error));

const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
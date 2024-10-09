FROM python:3.10.12

WORKDIR /app

COPY requirements.txt .

COPY . .

RUN pip install --upgrade pip

RUN pip install --no-cache-dir -r requirements.txt --upgrade numpy pandas

COPY . . 

CMD ["python","src/main.py"]

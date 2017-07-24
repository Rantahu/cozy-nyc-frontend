FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code/server
WORKDIR /code/server
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/server
